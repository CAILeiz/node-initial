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

// express中间件
// 输出日志
app.use(logger("dev"));
app.use(express.json());
// res.body
app.use(express.urlencoded({ extended: false }));
// 设置cookie
app.use(cookieParser());
// 设置静态资源 如果有访问静态资源直接输出
app.use(express.static(path.join(__dirname, "public")));

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
