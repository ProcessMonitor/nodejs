const express = require("express");
const db = require('../db/connect');
const router = require('../router/userRouter');
var app = express();
const bodyparser = require("body-parser");
// 解析 表单数据 x-www-form-erlencode
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json());



app.use('/user', router);
app.listen(3000, () => {

    console.log('server start');

})

