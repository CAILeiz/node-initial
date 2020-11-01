var express = require("express");
// express.Router() 实例化路由模块 该路由模块相当于一个小型的app
// 假设现在我们新建一个商城app
let api = express.Router();
// express.Router()实例也有中间件可以用来拦截
// 添加一个允许前端跨域的中间件
api.use((req, res, next) => {
  // 允许所有源跨域
  res.append("Access-Control-Allow-Origin", "*");
  // 允许所有请求类型
  res.append("Access-Control-Allow-Origin-Content-type", "*");
  console.log("你是我的人");
  next();
});
// cid为分类id pid为页面id
api.get("/book/cataory/:cid/page/:pid", (req, res) => {
  res.send("商城首页");
});
api.get("/list", (req, res) => {
  res.send("商城列表页");
});
module.exports = api;
