const url = require('url')


// let urlString = 'http://192.1.0.109:8080/test/?us=123&ps=456#nihao'

// let urlobj = url.parse(urlString)
// console.log(urlobj)

let myurltest = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: '192.1.0.109:8080',
    port: '8080',
    hostname: '192.1.0.109',
    hash: '#nihao',
    search: '?us=123&ps=456',
    query: 'us=123&ps=456',
    pathname: '/test/',
    path: '/test/?us=123&ps=456',
    href: 'http://192.1.0.109:8080/test/?us=123&ps=456#nihao'
  }
  let urlstring = url.format(myurltest)
  console.log(urlstring)

//总结 url.parse把url字符串转化为url对象 url.format把对象转字符串
// json 是一种数据格式 json对象：json格式的对象 json字符串：json格式的字符串
// 那什么养的格式 是json格式呢？ key-value 
/*

{
    "name" = "zhangsan"
}

*/