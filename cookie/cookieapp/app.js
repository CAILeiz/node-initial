var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var md5 = require("./MD5");
var str = "11111";
console.log(md5.md5(str + md5.MD5_SUFFIX));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
// 设置ejs渲染模板
app.set("views", path.join(__dirname, "views"));
// 设置解析ejs模板的引擎
app.set("view engine", "ejs");

// express中间件
// 输出日志
app.use(logger("dev"));
app.use(express.json());
// res.body
app.use(express.urlencoded({ extended: false }));
// 设置cookie
// 给cookie 加密
app.use(cookieParser("secret"));
// 设置静态资源 如果有访问静态资源直接输出
app.use(express.static(path.join(__dirname, "public")));

// 设置路由模块
app.use("/", indexRouter);
app.use("/users", usersRouter);

// 如果访问的路径不存在 返回404错误
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.render("404.ejs");
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
