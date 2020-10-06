let http = require("http"),
  path = require("path"),
  url = require("url"),
  fs = require("fs");
class dlApp {
  constructor() {
    // 定义用来注册的接口对象
    this.reqEvent = {};
    //
    this.server = http.createServer();
    this.server.on("request", (req, res) => {
      let pathObj = path.parse(req.url);
      console.log(pathObj);
      // 判断接口地址中有没有这个url地址
      if (this.reqEvent.hasOwnProperty(pathObj.dir)) {
        res.setHeader("Content-type", "text/html;charset=UTF-8");
        this.reqEvent[pathObj.dir](req, res);
      } else if (pathObj.dir == "/static") {
        res.setHeader("Content-type", this.getContentType(pathObj.ext));
        let rs = fs.createReadStream("./static/" + pathObj.base);
        rs.pipe(res);
      } else {
        res.setHeader("Content-type", "text/html;charset=UTF-8");
        res.end("<h1>404!页面找不到!</h1>");
      }
    });
  }
  // 注册接口
  on(url, fn) {
    this.reqEvent[url] = fn;
  }
  // 启动服务
  run(port, callback) {
    this.server.listen(port, callback);
  }
  // 定义响应返回的类型
  getContentType(extname) {
    switch (extname) {
      case ".jpg":
        return "image/jpeg";
      case ".html":
        return "text/html;charset=utf-8";
      case ".js":
        return "text/jacascript;charset=utf-8";
      case ".json":
        return "text/json;charset=utf-8";
      case ".gif":
        return "image/gif";
      case ".css":
        return "text/css";
      default:
        break;
    }
  }
}
// 封装的最终目标
let app = new dlApp();
app.on("/", (req, res) => {
  res.end("这是首页");
});
app.on("/gnxw", (req, res) => {
  res.end("这是国内新闻");
});
app.on("/gnxw/index.html", (req, res) => {
  res.end("这是国内新闻首页");
});
app.on("/gwxw", (req, res) => {
  res.end("这是国外新闻");
});
app.on("/gwxw/index.html", (req, res) => {
  res.end("这是国外新闻首页");
});
app.run(80, (_) => {
  console.log("服务启动了,端口为80,地址为127.0.0.1");
});
