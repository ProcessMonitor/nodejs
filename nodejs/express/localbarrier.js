const express = require("express");

var app = express();

// 局部中间件
app.get('/test1', (req, res, next) => {
    console.log('fun1');
    next();//继续往下执行 fun2
}, (req, res) => {
    console.log('fun2');
    res.send('fun2 exposed')
})
// app.get('path' ,(fun1)=>{} ,fun2()=>{} ,......,) 

app.listen(3000, () => {
    console.log('start');
})
