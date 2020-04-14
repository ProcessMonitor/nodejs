// ..Router.js文件有点像 javaWeb的Controller 你细细品
const exp = require('express');
// 实例化router 对象
const router = exp.Router();
//引入UserModel
const User = require('../db/model/userModel');
//引入自己封装的邮件模块.
const sender = require('../utils/sendmail');
var MAX_CODE_TIME = 600000;
var codeOnServer = 0;
var userCodeSendTime;
//测试路径
router.get('/test1', (req, res) => {
    res.send('test1 ok');
    //测试接口
});

router.post('/sendMailCode', (req, res) => {
    let { us, ps, mail } = req.body;
    //检查是否拿到数据
    if (!us || !ps || mail.length == 0) {
        return res.send({
            err: -1,
            msg: '缺失用户信息'
        })
    } else {
        User.find({ us: us }).then((data) => {
            if (data.length != 0) {
                return res.send({
                    err: -2,
                    msg: '用户已注册'
                })
            }
        }).then(() => {
            // 生成验证码 0~1之间的小数x10000然后强制取整 为四位整数
            do {
                var code = parseInt(Math.random() * 10000);
            }//如果生成了三位的验证码则重新生成直到四位为止
            while (parseInt(code / 1000) == 0)
            //时间和用户验证码暂存到服务器缓存
            codeOnServer = code;
            console.log("启动计时器");
            userCodeSendTime = new Date().getTime();
            sender.sendcode(mail, code);
            res.send({
                err: 0,
                msg: '邮件发送成功'
            });

        }).catch((err) => {
            return new Error('send fail');
        })
    }
});

router.post('/doRegist', (req, res) => {
    //数据接收
    let { us, ps, code } = req.body;
    // 检查输入合法性
    let currentTime = new Date().getTime();
    console.log("time gap :"+ (currentTime - userCodeSendTime))
    let isPass = 1;
    if (us && ps) {
        // 查看数据库中是否有重复用户
        User.find({ us: us }).then((data) => {//数据处理
            if (data.length == 0 && code == codeOnServer 
                && (currentTime - userCodeSendTime) < MAX_CODE_TIME) {
                    User.insertMany({ 
                        us: us,
                        ps: ps
                    })
                isPass = 0;
            }else if(code != codeOnServer){//数据返回
                return res.send({ err :-3.1 , msg : '验证码错误'})
            }else{
                return res.send({ err :-3.2 , msg : '时间逾期'})
            }
        }).then(() => { 
            if(isPass == 0){
                return res.send({
                    err: 0,
                    msg: 'reg ok'
                });
            }else { 
                return new Error('reg fail');
            }
        }).catch((err) => {
            console.log("err:" + err)
        })
    } else {
        return res.send({
            msg: '用户信息异常缺失'
        })
    }
    /*异步操作 执行时 不可在有其他res.send 一条逻辑线走到底只能有一个res.send返回多个可能的路线将报错:
    (node:20624) UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]:
    Cannot set headers after they are sent to the client*/ 
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
            res.send('欢迎您 , 尊敬的' + us);
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
自动更新 服务器端代码 可用 nodemon 类似于Tomcat自动保存后自动更新部署代码
npm install nodemon -g
*/