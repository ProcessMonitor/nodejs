// demo ::::
const mongo = require("mongoose");

//创建模板
var userSchema = new mongo.Schema({
    us: { type: String, requied: true },
    ps: { type: String, requied: true },
    age: { type: Number },
    gender: { type: Number, default: 0 },
});
// 将Schema 转化为数据模型
var User = mongo.model('user', userSchema);

module.exports = User;