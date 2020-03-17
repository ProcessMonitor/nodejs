/*
1.请求网站数据
2.将数据保存本地
*/

let http = require('https');
let fs = require('fs')
let url = 'https://www.zdqx.com/';

http.get(url, (res) => {
    const {
        statusCode
    } = res;
    const contentType = res.headers['content-type']
    console.log(statusCode, contentType)
    let err = null;
    if (statusCode != 200) {
        error = new Error('statusCodeError');
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }

    if (err) {
        return false;

    }
    let rawdata = '';
    // 数据分段 只要接受数据就会出发data 事件 chunk每次接受的数据片段
    res.on('data', (chunk) => {
        console.log('数据传输。。')
        rawdata += chunk.toString();
        // console.log(chunk.toString())
    })
    res.on('end', () => {
        console.log('传输完毕。')
        fs.writeFileSync('./csdn.html', rawdata)
    })

}).on('error', (err) => {
    console.log('传输错误。')
    console.log(err)
})
/*
let obj = { name : 123 , age : 222}
let name  = obj.name;
let {name} = obj //es6的写法
*/