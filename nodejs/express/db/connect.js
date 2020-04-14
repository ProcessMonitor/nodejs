var mongod = require("mongoose");
//连接数据库
mongod.connect('mongodb://localhost/test', { useNewUrlParser: true ,  useUnifiedTopology: true});
var db = mongod.connection;// 创建数据库连接对象
db.on('erro', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('test数据库已连接!');
});



