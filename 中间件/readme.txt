./routers/mall 是路由中间件商城的小栗子
./routers/api 是我们为前端提供的接口API



从字面意思，我们可以了解到它大概就是做中间代理操作，事实也是如此;
大多数情况下，中间件就是在做接收到请求和发送响应中间的一系列操作。事实上，express是一个路由和中间件的web框架，Express应用程序基本上是一系列中间件函数的调用。

1.浏览器发送请求
2.express接受请求中间处理的过程
3.路由函数处理渲染
4.res.render渲染

中间件函数可以执行以下任务:
执行任何代码。
对请求和响应对象进行更改。
结束请求/响应循环。
调用堆栈中的下一个中间件函数。
中间件也分为应用层中间件、路由中间件、内置中间件、错误处理中间件和第三方中间件。下面分别对以下进行说明︰

应用层中间件
// 其实访问/的时候 经过了app.use的每个函数
// 封装一个dlQuery中间件
app.use((req, res, next) => {
  let splitRes = req.url.split("?");
  if (splitRes.length) {
    let keyValueArr = splitRes[1].split("&");
    let dlQuery = {};
    keyValueArr.forEach((item) => {
      let key = item.split("=")[0];
      let value = item.split("=")[1];
      dlQuery[key] = value;
    });
    req.dlQuery = dlQuery;
  } else {
    req.dlQuery = {};
  }
  next();
});
// 访问 http://127.0.0.1:3000/?name=11&pass=000 输出 { name: '11', pass: '000' }
// 截获之后可以不写next 直接res.send("404")

// app.use里面可以写多个函数,想要走到下一个函数的时候必须next()
app.use(
  (req, res, next) => {
    console.log(111111);
    next();
  },
  (req, res, next) => {
    console.log(122222);
    next();
  }
);

// 路由中间件
var express = require("express");
// express.Router() 实例化路由模块 该路由模块相当于一个小型的app
// 假设现在我们新建一个商城app
let routerMall = express.Router();
// express.Router()实例也有中间件可以用来拦截
routerMall.use((req, res, next) => {
  console.log("你是我的人");
  next();
});
routerMall.get("/", (req, res) => {
  res.send("商城首页");
});
routerMall.get("/list", (req, res) => {
  res.send("商城列表页");
});
module.exports = routerMall;
