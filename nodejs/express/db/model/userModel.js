// demo ::::
const mongo = require("mongoose");

//创建模板
var userSchema = new mongo.Schema({
    us: { type: String, requied: true },
    ps: { type: String, requied: true },
    mail: {type : String},
    tel:{type : Number},
    age: { type: Number },
    gender: { type: Number, default: 0 },
    date:{type : Date,default :new Date()}
});
// 将Schema 转化为数据模型
var User = mongo.model('user', userSchema);

module.exports = User;