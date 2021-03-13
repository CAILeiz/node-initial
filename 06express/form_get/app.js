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

// 解析post提交的数据需要用到下面语句进行解析
// app.use是中间件
app.use(express.urlencoded());

app.get("/", (req, res) => {
  console.log(122);
  console.log(req.params);
  let options = {};
  res.render("index", options);
});
// form get 请求
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

// form post 请求
app.post("/search", (req, res) => {
  // post提交的数据不在query上 而且需要 app.use(express.urlencoded());进行解析参数
  console.log(req.query);
  console.log(req.body);
  res.send("post请求");
});
// 处理登录
// 登录页
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // 查询数据库是否有此用户名和密码
  let strSql = "select * from user where username = ? and password = ?";
  let arr = [username, password];
  let searchResult = await sqlQuery(strSql);
  if (searchResult.length) {
    res.send("登录成功");
  } else {
    res.send("登录失败,请检查用户名或者密码");
  }
});
module.exports = app;
