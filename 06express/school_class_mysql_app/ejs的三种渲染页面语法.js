const express = require("express");
const ejs = require("ejs");
let app = express();
// 将模板引擎与express关联起来
app.set("views", "views"); // 设置视图的对应目录views
app.set("view engine", "ejs"); // 设置默认的模板引擎
app.engine("ejs", ejs.__express); // 定义模板引擎
// 下面介绍的是ejs模板的三种常见使用规则
app.get("/", async (req, res) => {
  // 插入变量方式
  let options = {
    title: "这是首页",
    articleTitle: "<h1>相信自己创造未来</h1>",
  };
  res.render("index", options);
});
app.get("/tj", async (req, res) => {
  // 条件方式
  let options = {
    username: "小明",
    gender: "男",
  };
  res.render("condition", options);
});
app.get("/xh", async (req, res) => {
  // 循环操作
  let options = {
    stars: ["蔡徐坤", "郭敬明", "吴亦凡", "鹿晗"],
  };
  res.render("xh", options);
});
module.exports = app;
