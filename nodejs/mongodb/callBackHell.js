
// 异步操作要保证一定的执行顺序,但是会导致回调地狱
const fs = require('fs');

// fs.stat('./hehe.js', (err, status) => {
//     console.log(status)
//     console.log(err);
// });


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
