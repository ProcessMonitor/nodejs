const express = require("express");

var app = express()
const bodyparser = require("body-parser")

// 解析 表单数据 x-www-form-erlencode
app.use(bodyparser.urlencoded({
    extended: false
}))
// 也可解析 jason
app.use(bodyparser.json());
// 创建一个api
app.get('/user/login', (req, res) => {
    // 接受get参数 query
    console.log(req.query);
    console.log('login method run');
    // 处理参数 
    res.send({
        err: 0,
        msg: 'login ok',
    })
})
app.post('/user/regist', (req, res) => {
    // 接受post数据
    // express 无法解析消息体 可以借助 body-parser插件 npm install body-parser
    let { username, pwd } = req.body;//无法使用
    console.log(req.body)
    if (username == 123 && pwd == 456) {
        res.send({ msg: 'reg ok' })
    }
})
app.listen(3000, () => {
    console.log('start');
})

// http://localhost:3000/user/login   
/*
api 接口的组成:
IP
port
path
method: get post
用户的数据  btw 数据格式 由后端确定

*/