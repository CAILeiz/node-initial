var express = require("express");
var path = require("path");
var app = express();

// express.Router() 实例化路由模块 该路由模块相当于一个小型的app
// 假设现在我们新建一个商城app
const routerMall = require("./routes/mall");
// 假设现在我们为前端提供接口
const routerApi = require("./routes/api");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// express.urlencoded本质上是让req多了一个body 让你可以访问req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.addNum = (a, b) => a + b;
  console.log("访问任何页面,此函数都会被调用");
  next();
});
app.use("/mall", routerMall);
app.use("/api", routerApi);
// 封装一个dlQuery中间件
app.use((req, res, next) => {
  try {
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
  } catch (error) {}
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

app.get("/", (req, res) => {
  console.log(req.dlQuery);
  res.send("这是首页" + res.addNum(9, 10));
});

module.exports = app;

// 其实访问/的时候 经过了app.use的每个函数
