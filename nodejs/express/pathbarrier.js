const express = require("express");

var app = express();
app.use('/', (req, res, next) => {// 优先匹配/ 然后是 /test
    console.log('拦截器生效');
    let token = req.query;
    if (token) {
        next();
    } else {
        res.send('miss token');
    }
})
// 创建一个api
app.get('/test1', (req, res) => {
    // 接受get参数 query
    console.log(req.query);
    console.log('login method run');
    // 处理参数 
    res.send({
        err: 0,
        msg: 'login ok',
    })
})
app.get('/test2', (req, res) => {
    // 接受post数据
    let { username, pwd } = req.body;// 不可直接使用
    res.send({
        msg: 'reg ok'
    })
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