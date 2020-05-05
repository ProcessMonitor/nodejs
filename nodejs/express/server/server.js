const express = require("express");
var app = express();
const db = require('../db/connect');
const userrouter = require('../router/userRouter');
const foodrouter = require('../router/foodRouter');
const path = require('path');
const bodyparser = require("body-parser");

// 解析表单数据 x-www-form-erlencode
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json()); // 使其能解析json文件格式的数据

//使用静态资源目录
let realpath = path.join(__dirname, '../staticsource');
console.log("当前使用的静态资源目录为:  " + realpath);
app.use('/public', express.static(realpath)); // 加个 public头


app.use('/user', userrouter); // 添加 userrouter
app.use('/food', foodrouter); // 添加 foodrouter 



app.listen(3000, () => {
    console.log('server started...');
});