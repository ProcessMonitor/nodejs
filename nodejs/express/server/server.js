const express = require("express");
const db = require('../db/connect');
const router = require('../router/userRouter');
var app = express();


app.use('/user', router);
app.listen(3000, () => {

    console.log('server start');

})

