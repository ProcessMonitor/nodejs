const fs = require('fs');

// 封装 
function isExist() {
    return new Promise((resolve, reject) => {
        fs.stat('./hehe.js', (err, stats) => {
            console.log('stats : ' + stats);
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
    //手动终止 跳入catch方法
    // throw new Error('手动终止后不会创建新文件');

    // //这段代码是为了测试时不用每次都手动创建新文件 所以删除文件如果成功后再次创建同名新文件
    fs.writeFile('./hehe.js', '', (err) => {
        if (err) { console.log('重新创建hehejs失败'); }
    })
}).then(() => {
    console.log('sdadsa');
}).then(() => {
    console.log('ewqqwewqewq');
}).catch((err) => {
    console.log('err : ' + err);
});
/* 一组链式调用 只需要一个catch

如何手动终止链式调用?  throw new err
*/