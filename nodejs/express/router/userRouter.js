// ..Router.js文件有点像 javaWeb的Controller 你细细品
const exp = require('express');
const User = require('../db/model/userModel');
const router = exp.Router();
router.get('/test1', (req, res) => {
    res.send('test ok');//测试接口
})

router.post('/reg', (req, res) => {
    //数据接收
    let { us, ps } = req.body;
    if (!us || !ps)
        return res.send({ errr: -1, msg: 'data error ' })
    console.log(us + ps);
    //数据处理
    User.insertMany({
        us: us,
        ps: ps
    }).then(() => {
        res.send({ err: 0, msg: 'reg ok' });
    }).catch((err) => {
        res.send({ err: -1, msg: 'reg fail' })
    })
    // res.send('test ok');  //注意 以上 异步操作 执行时 不可在有其他res.send 只能有一个res.send返回
    //数据返回
})

router.post('/login', (req, res) => {
    User.find({ us: us, ps: ps })
        .then((data) => { // 经过测试 返回的data 是个数组格式
            if (data.length > 0)
                console.log(data);
            else {
                res.send(err : -2, msg : '用户名或密码不正确');
            }
        }).catch((err) => {
            console.log('出错了' + err);
        })
})


module.exports = router;

/*

自动更新 服务器端代码 可用 nodemon
npm install nodemon -g
*/