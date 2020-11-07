var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// 引入session模块
let session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var sessionRouter = require("./routes/sessionModule");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// express 中间件
// session加盐 是指加密的时候 secret
app.use(
  session({
    secret: "dl",
    // 因为session本质上也是cookie 默认失效时间是一个会话时间
    // 是否要保存到磁盘上 强制保存session
    resave: true,
    cookie: {
      name: "value",
      // 设置cookie过期时间为一周
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    // 是否保存初始化的session
    saveUninitialized: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/session", sessionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
