// ..Router.js文件有点像 javaWeb的Controller 你细细品
const exp = require('express');
const foodrouter = exp.Router();
const foodModel = require("../db/model/foodModel");
//测试路径
foodrouter.get('/testfood', (req, res) => {
    res.send('testfood api ok');
    //测试接口
});

/**
 * @api {post} /food/add addfood
 * @apiName addfood
 * @apiGroup Food
 * @apiParam {String} name foodname.
 * @apiParam {String} price price.
 * @apiParam {String} description description.
 * @apiParam {Number} typeid id of typename.
 * @apiParam {String} img images of food.
 * @apiSuccess {String} msg {err : 0 , msg : '添加菜品成功'}.
 */

foodrouter.post('/add', (req, res) => {
    var obj = {
        name: name,
        price: price,
        description: description,
        typename: typeid,
        typeid: typeid,
        img: img,
    } = req.body;
    foodModel.insertMany(obj)
        .then((data) => {
            res.send({
                err: 0,
                msg: "插入成功"
            })
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "插入失败"
            });
        })
})
/**
 * @api {post} /food/findByType findFood
 * @apiName findFoodByType
 * @apiGroup Food
 * @apiParam {String} Typeid Type 🆔.
 * @apiSuccess {String} msg { }.
 */
foodrouter.post("/findByType", (req, res) => {
    let {
        typeid
    } = req.body;
    foodModel.find({
            typeid
        }).then((data) => {

            res.send({
                err: 0,
                msg: "查询成功"
            })
        })
        .catch((err) => {
            res.send({
                err: -1,
                msg: "查询失败"
            });
        })


})


module.exports = foodrouter;