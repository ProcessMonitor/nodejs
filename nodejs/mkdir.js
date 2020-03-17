// //文件操作
// const fs = require('fs')
// fs.mkdir('mkdirtest',(error , data)=> {
//     console.log(error)
//     console.log(data)//此行会输出undefined 那么为什么readdir 有俩参数
//     // mkdir只有一个参数呢?mkdir只有俩结果要么创建成功要么失败 读取文件你要知道读了啥

// })
//文件更改
// fs.rename('./mkdir.js','./mkdirtest.js',(err)=>{
//     if(err){
//         console.log(err)
//         console.log('失败')
//     }else{
//         console.log('更改成功')
//     }
// })
//文件删除
// fs.rmdir('./mkdirtest',(err)=>{
//     if (err) {
//         console.log('删除失败')
//         console.log(err)
        
//     }else{
//         console.log('OJBKKK')
//     }
// })//此方法只能删除空文件夹

//如何删除文件夹及其中的所有文件呢? 这是网上的通过调用cmd 来删除 但我没跑通..还有乱码
var exec = require('child_process').exec;
var cmdStr = 'rm -rf ./mkdirtest';
exec(cmdStr, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});