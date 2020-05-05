// demo ::::
const mongo = require("mongoose");

//创建模板
var foodModel = new mongo.Schema({
    name: { type: String, requied: true },
    price: { type: String, requied: true },
    description: {type : String ,require : true},
    typename: {type : String ,require : true},
    typeid : { type: Number , default :0},
    img: {type : String ,require : true},
});
// 将Schema 转化为数据模型
var Food = mongo.model('food', foodModel);

module.exports = Food;