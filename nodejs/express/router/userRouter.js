// ..Router.js文件有点像 javaWeb的Controller 你细细品
const exp = require('express');
// 实例化router 对象
const router = exp.Router();
//引入UserModel 
const User = require('../db/model/userModel');
//引入自己封装的邮件模块.
const sender = require('../utils/sendmail');

//测试路径
router.get('/test1', (req, res) => {
    res.send('test1 ok');
    //测试接口
});

router.post('/getMailCode', (req, res) => {
    do {
        var code = parseInt(Math.random() * 10000);
    }
    while (parseInt(code / 1000) == 0)
    let {
        mail
    } = req.body;
    if (mail.length == 0) {
        return res.send({
            err: -1,
            msg: '缺失邮箱信息'
        })
    }
    sender.sendcode(mail, code);
    res.send({
        err: 0,
        msg: '邮件发送成功'
    });
});

router.post('/reg', (req, res) => {
    //数据接收
    let {
        us,
        ps
    } = req.body;
    // 检查输入合法性
    if (us && ps) {
        // 查看数据库中是否重复用户
        User.find({
                us: us
            }).then((data) => {
                if (data.length == 0) {
                    return User.insertMany({ //如果不存在 链式调用 return 出去 继续下面then 如果不链式调用的化只能用回调函数
                        us: us,
                        ps: ps
                    })
                } else {
                    res.send({
                        err: -3,
                        msg: '用户名已存在'
                    })
                }
            })
            .then(() => { //数据处理
                res.send({
                    err: 0,
                    msg: 'reg ok'
                });
            })
            .catch((err) => {
                return new Error('reg fail');
            })
    } else {
        return res.send({
            msg: '输入不合法'
        })
    }
    //异步操作 执行时 不可在有其他res.send 一条逻辑线走到底只能有一个res.send返回多个可能的路线将报错
    //数据返回
});

router.post('/login', (req, res) => {
    let {
        us,
        ps
    } = req.body;
    User.find({
        us: us,
        ps: ps
    }).then((data) => { // 经过测试 返回的data 是个数组格式
        if (data.length > 0) {
            console.log('拿到的用户为 :' + data);
            res.send('欢迎您 :' + us);
        } else {
            res.send({
                err: -2,
                msg: '用户名或密码不正确'
            });
        }
    }).catch((err) => {
        console.log('login出错了,INFO:' + err);
    });
})



module.exports = router;

/*

自动更新 服务器端代码 可用 nodemon
npm install nodemon -g
*/