# 中间件

# ./routers/mall 是路由中间件商城的小栗子

# ./routers/api 是我们为前端提供的接口 API

从字面意思，我们可以了解到它大概就是做中间代理操作，事实也是如此;
大多数情况下，中间件就是在做接收到请求和发送响应中间的一系列操作。事实上，express 是一个路由和中间件的 web 框架，Express 应用程序基本上是一系列中间件函数的调用。
[express 原理:]

1. 浏览器发送请求
2. express 接受请求中间处理的过程
3. 路由函数处理渲染
4. res.render 渲染
   中间件函数可以执行以下任务:
   执行任何代码。
   对请求和响应对象进行更改。
   结束请求/响应循环。
   调用堆栈中的下一个中间件函数。
   中间件也分为应用层中间件、路由中间件、内置中间件、错误处理中间件和第三方中间件。下面分别对以下进行说明︰
   应用层中间件

```js
// 其实访问/的时候 经过了 app.use 的每个函数
// 封装一个 dlQuery 中间件
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
// 截获之后可以不写 next 直接 res.send("404")

// app.use 里面可以写多个函数,想要走到下一个函数的时候必须 next()
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
// express.Router() 实例化路由模块 该路由模块相当于一个小型的 app
// 假设现在我们新建一个商城 app
let routerMall = express.Router();
// express.Router()实例也有中间件可以用来拦截
routerMall.use((req, res, next) => {
  console.log("中间件被调用");
  next();
});
routerMall.get("/", (req, res) => {
  res.send("商城首页");
});
routerMall.get("/list", (req, res) => {
  res.send("商城列表页");
});
module.exports = routerMall;
```
