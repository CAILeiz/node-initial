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
