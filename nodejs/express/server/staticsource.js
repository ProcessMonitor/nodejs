const express = require("express");
const path = require("path");

var app = express();
// console.log(__dirname)
let realpath = path.join(__dirname, '../staticsource');

console.log(realpath);

app.use(express.static(realpath));//使用静态资源目录
//域名 + 端口号 直接指向静态目录 可以在 staticsource 下 放一个 pic 目录 video 目录 songs目录等详细进行分类
app.listen(3000, () => {
    console.log('source server started');
})