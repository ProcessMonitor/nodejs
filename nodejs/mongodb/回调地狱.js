
// 异步操作要保证一定的执行顺序,但是会导致回调地狱
const fs = require('fs');


fs.stat('./hehe.js', (err, status) => {
    console.log(status)
    console.log(err);
});
