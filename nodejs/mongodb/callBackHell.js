
// 异步操作要保证一定的执行顺序,但是会导致回调地狱
const fs = require('fs');

//删除文件时要看文件是否存在 再去删除 再或者删除后再新建一个文件,再或者新建后再.... 就会导致回调地狱
fs.stat('./hehe.js', (err, status) => {
    console.log(status)
    console.log(err);
    if (err) {
        console.log('no exist');
    } else {
        fs.unlink('./hehe.js', (err) => {
            console.log('unlink success ');
            fs.writeFile('./hehe.js', 'xxx', (err) => {
                //..... more oprations ....
            })
        })
    }
});


function delfile() {
    return new Promise((resolve, reject) => {
        // 异步操作
        fs.unlink('./hehe.js', (error) => {
            if (error) {
                console.log('fail');
                // reject('失败了');
            } else {
                resolve('成功了');
            }
        });
    });
}

delfile().then((msg) => {
    console.log("then : " + msg);
}).catch((err) => {
    console.log("err:" + err);

})
