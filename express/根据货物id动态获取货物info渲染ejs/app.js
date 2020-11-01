var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// 首页
app.get("/", (req, res) => {
  console.log(122);
  console.log(req.params);
  let options = {};
  res.render("index", options);
});
app.get("/search", async (req, res) => {
  console.log(req.url);
  // 接受表单发送的请求并拆解成对象的方式输出
  let keyValueArr = req.url.split("&");
  let reqParams = {};
  keyValueArr.forEach((item) => {
    let key = item.split("=")[0];
    let value = item.split("=")[1];
    reqParams[key] = value;
  });
  console.log(reqParams);
  // 这里的reqParams等于req.query
  console.log(req.query);
  // 根据req.query.key 搜索数据库中对应的数据
  // let strSql = "select id, bookname, catory from mall where name like %" + req.query.key + "%";
  // let result =await sqlQuery(strSql);
  // res.json(Array.from(result));
  res.send("搜索页面"); //
});
app.get("/ajax", (req, res) => {
  res.send("AJAX");
});
module.exports = app;
