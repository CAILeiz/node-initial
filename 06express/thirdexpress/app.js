let express = require("express");
let app = express();
// 1. 字符串的路由模式
app.get("/", (req, res) => {
  res.end("这是首页");
});
// 2. 字符串模式路径 类字符串的模式
// 匹配abcd或者abd
app.get("/ab?cd", (req, res) => {
  res.end("ab?cd");
});
// 匹配abd或者abbb..d
app.get("/ab+d", (req, res) => {
  res.end("ab+d");
});
// 匹配abd或者abbb..d
app.get("/a(bc)?d", (req, res) => {
  res.end("a(bc)?d");
});
// 匹配axxxd ad等
app.get("/a*d", (req, res) => {
  res.end("a*d");
});
// 3. 正则表达式路径
// 此路由匹配其中带有a的任何内容
// /\/a\d{10}/
// 4. 动态路由使用 ":" 路由参数的名称必须是由"文字字符"[A-Za-z0-9]组成
// 查看用户下面的分类下面的用户id
app.get("/user/:cataoryid/a:userid/", (req, res) => {
  res.setHeader("charset", "utf-8");
  res.end(
    "用户id页面:  \n" +
      req.params.userid +
      "\n用户分类id获取\n" +
      req.params.cataoryid
  );
});
// 由于连字符()和点(.)是按字面解释的，因此可以将它们与路由参数一起使用，以实现有用的目的。
// Route path: /flights/:from-:to
// Request URL: http://1ocalhost:3000/f1ights/LAX-SFOreq params : { "from": "LAX"，"to" : "SFO"I
// Route path:/plantae/:genus.:species
// Request URL: http://loca7host:3000/plantae/Prunus.persica req.params:{"genus ":"Prunus "，"species":"persica" }
// 选择语言
// 要更好地控制可以由route参数匹配的确切字符串，可以在括号(()后面附加一个正则表达式﹐
// Route path:/user/:userId(\d+)
// Request URL:http://localhost :3000/user/42req.params:{"userId":"42"}
// 由于正则表达式通常是文字字符串的一部分，因此请确保\使用其他反斜杠对所有字符进行转义，例如\\d+。

// 路由处理程序
// 您可以提供行为类似于中间件的多个回调函数来处理请求。唯一的例外是这些回调可能会调用next( ' route ')以绕过其余的路由回调。您可以使用此机制在路由上施加先决条件，然后在没有理由继续使用当前路由的情况下将控制权传递给后续路由。
// 路由处理程序可以采用函数，函数数组或二者组合的形式，如以下示例所示。单个回调函数可以处理路由。例如︰
// app.get('/example/a',function(req，res){res.send('He7lo from A!')
// })
// 多个回调函数可以处理一条路由（确保指定了next对象)。例如∶
app.get(
  "/example/b",
  function (req, res, next) {
    // 第一个函数做一件事
    console.log("the response wil1 be sent by the next function ...");
    req.hostname = "127.0.0.1";
    next();
  },
  function (req, res, next) {
    // 第二个函数做第二件事
    res.send("req.hostname: \n" + req.params.hostname);
  }
);
// 回调函数数组可以处理路由。例如:

app.listen(8080, function () {
  console.log("服务启动了");
  console.log("127.0.0.1:8080");
});
module.exports = app;
