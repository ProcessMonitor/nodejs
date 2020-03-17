// //文件操作
 const fs = require('fs')
// fs.mkdir('mkdirtest',(error , data)=> {
//     console.log(error)
//     console.log(data)//此行会输出undefined 那么为什么readdir 有俩参数
//     // mkdir只有一个参数呢?mkdir只有俩结果要么创建成功要么失败 读取文件你要知道读了啥

// })
//文件更改
fs.rename('./mkdir.js','./mkdirtest.js',(err)=>{
    if(err){
        console.log(err)
        console.log('失败')
    }else{
        console.log('更改成功')
    }
})