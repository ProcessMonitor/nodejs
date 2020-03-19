var mongod = require("mongoose");
//连接数据库
mongod.connect('mongodb://localhost/test',{ useNewUrlParser: true });

var db = mongod.connection;// 创建数据库连接对象

db.on('erro',console.error.bind(console,'connection error'));
db.once('open',function(){
    // we
    console.log('test数据库已连接!');
});

// 增删改查一切始于schema 
//[doc链接](https://mongoosejs.com/docs/schematypes.html)
// demo ::::
//创建模板
var schema = new mongod.Schema({
    us :{type : String , requied : true},
    ps :{type : String , requied : true},
    age :{ type : Number},
    gender : {type : Number,default :0},
});
// 将 schema对象转化为数据模型(model) 也就是创建table
var User = mongod.model('user',schema);
//操作数据库
// User.insertMany({us :'zhangsan',ps: '123' ,age:11});
// User.find()
User.remove()
.then((data)=>{
    console.log(data);
    console.log('find成功');
})
.catch((err)=>{
    console.log(err);
    console.log('失败');
});
