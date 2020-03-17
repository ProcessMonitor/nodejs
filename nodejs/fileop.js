const fs = require('fs')
// 创建文件 覆盖写入
// fs.writeFile('./filetest.txt','today is the nice day',(err)=>{
//     console.log(err)
// })
// //写入
// fs.appendFile('./filetest.txt',',but i wanna fk the world',(err)=>{
//     console.log(err)
// })
//读取
// fs.readFile('./filetest.txt',(err,msg)=>{
//     console.log(err)
//     console.log(msg.toString('utf-8'))
//     //默认二进制数据流的buffer 
// })
//删除
fs.unlink('./filetest.txt',(err)=>{
    console.log(err)
})