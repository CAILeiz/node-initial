// 连接数据库 写接口返回数据
const express = require("express");
const ejs = require("ejs");
let app = express();
let path = require("path");
let sqlQuery = require("./dlMysql");

// 将模板引擎与express关联起来
app.set("views", "views"); // 设置视图的对应目录views
app.set("view engine", "ejs"); // 设置默认的模板引擎
app.engine("ejs", ejs.__express); // 定义模板引擎
app.use(express.static(path.join(__dirname, "public")));
//  首页内容是boss表中的前两天数据
app.get("/", async (req, res) => {
  let strSql = "select * from mysupermarket limit 0,2";
  let queryResult = await sqlQuery(strSql);
  console.log(Array.from(queryResult));
  // res.json(Array.from(queryResult));
  res.render("index", { title: "dl首页" });
});
// 获取到boss数据
app.get("/good", async (req, res) => {
  // console.log(req);
  let strSql = "select goodId, goodName, price from mysupermarket limit 0,2";
  let queryResult = await sqlQuery(strSql);
  console.log(Array.from(queryResult));
  // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
  // res.json(Array.from(queryResult));
  res.render("twogoods", { goods: Array.from(queryResult) });
});
app.get("/good/:goodid", async (req, res) => {
  let strSql = "select * from mysupermarket where goodId = ?";
  let goodid = req.params.goodid;
  let result = await sqlQuery(strSql, [goodid]);
  res.json(Array.from(result));
});
app.listen(8080);
module.exports = app;
