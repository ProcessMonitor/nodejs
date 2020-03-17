const qs = require('querystring');
// let testString = 'name=xiaozhang&passwd=123&gender=0'
// let obj = qs.parse(testString, '&', '=')
// //将query字符串变成query 对象
// console.log(obj)
let obj = {
    name: 'xiaozhang',
    passwd: '123',
    gender: '0'
};
let string = qs.stringify(obj, '&', '='); //第一个字符表示的是键值之间的字符
console.log(string);
// let escape = '%7C%7B%7D';
// console.log(qs.unescape(escape));