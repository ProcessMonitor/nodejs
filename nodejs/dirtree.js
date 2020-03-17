const fs = require('fs')

// fs.readdir('../nodejs',(err,dirs)=>{
//     for (let index = 0; index < dirs.length; index++) {
//         const code = dirs[index];
//         console.log(code)
//     }

//     console.log(err)
// })
fs.stat('../nodejs',(err,status)=>{
    if (status.isFile()) {
        console.log('是文件')
    }else{
        console.log('是dir')
    }

})