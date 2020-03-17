
const fs = require('fs')
// //先试一试同步读取文件
// let dirs = fs.readdirSync('./')
// console.log(dirs)


//异步读取方式 错误的回调优先
// fs.readdir('../nodejs',(err,data)=>{
//     // console.log(err)
//     // console.log(data)
//     if(err){
//         console.log('读取失败,请重新检查目录')
//     }else{
//         console.log(data)
//     }
// });
// 在回调函数中第一个参数表示错误对象 默认为空 null 如果出现错误就是实体对象


//同步与异步的区别:
/////////////////////////////
// let dirs = fs.readdirSync('./无效路径')
// console.log(233333)// 此时用同步操作233333不打印
// console.log(dirs)

//如何用同步方法但是让程序出错但是继续执行结束呢?
// try {
//     let dirs = fs.readdirSync('./无效路径')
//     console.log(dirs)
// } catch (error) {
//     console.log('!!!!!!出错了!!!!!!')
//     console.log(error)
// }
//     console.log(233333)//使用 try catch 此时233333打印了

//然后再看异步操作
fs.readdir('./无效目录',(err,data)=>{
    // console.log(err)
    // console.log(data)
    if(err){
        console.log('读取失败,请重新检查目录')
    }else{
        console.log(data)
    }
})
console.log(233333)//此时无trycatch 233333输出了

/* 总结  错误处理 分两种情况 同步 异步 
同步里面关键步骤要trycatch一下 
异步需要回调函数 错误的回调优先
curd  create update read delete
*/