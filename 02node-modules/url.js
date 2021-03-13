const url = require("url");
console.log(url);
// url最常用的是parse 将url地址转为对象
console.log(url.parse("https://www.baidu.com/s?ie=UTF-8&wd=node"));
let targetUrl = "http://www.taobao.com/",
    httpUrl = "./index.html";
url.resolve(targetUrl, httpUrl); // 输出为
console.log(url.resolve(targetUrl, httpUrl));