const http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  // 设置响应文本格式
  res.setHeader("Content-type", "text/html;charset=UTF-8");
  console.log(req);
  console.log(req.url);
  let _url = req.url;
  if (_url == "/") {
    res.end("<h1>这是首页</h1>");
  } else if (_url == "/gnxw") {
    res.end("<h1>国内新闻</h1>");
  } else if (_url == "/gwxw") {
    res.end("<h1>国外新闻</h1>");
  } else {
    res.end("<h1>404！页面找不到！</h1>");
  }
  // 输出请求头
  console.log(req.headers);
  // 下面的_headers是输出的headers
  let _headers = {
    host: "127.0.0.1:9090",
    connection: "keep-alive",
    pragma: "no-cache",
    "cache-control": "no-cache",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    accept: "image/webp,image/apng,image/*,*/*;q=0.8",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-dest": "image",
    referer: "http://127.0.0.1:9090/",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9",
  };
});
server.listen(9090, (_) => {
  console.log("端口为9090");
});
