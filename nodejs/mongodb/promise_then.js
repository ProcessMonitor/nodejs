const fs = require('fs');

// 封装 
function isExist() {
    return new Promise((resolve, reject) => {
        fs.stat('./hehe.js', (err, stats) => {
            console.log('stats : ' + stats);
            console.log(err);
            if (err) {
                reject('文件不存在');
            } else {
                resolve('文件存在');
            }
        })
    })
}

function delfile() {
    return new Promise((resolve, reject) => {
        fs.unlink('./hehe.js', (err) => {
            if (err) {
                reject('fail');
            } else {
                resolve('ok');
            }
        })
    })
}

isExist().then(() => {
    console.log('is exist 成功处理');
    return delfile();
}).then(() => {
    console.log('删除文件成功处理');
}).catch((err) => {
    console.log('err : ' + err);
})
// 一组链式调用 只需要一个catch
// 如何主动/手动终止链式调用? 