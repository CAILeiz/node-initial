var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/setcookie", (req, res) => {
  // 基础设置cookie, 有效期认为是一个会话,浏览器关闭会失效
  // maxAge设置失效时间, domain: 设置域名
  res.cookie("isLogin", "true", {
    maxAge: 5000,
    domain: "ccc.com",
    httpOnly: true,
  });
  res.send("返回cookie成功");
});
router.get("/login", (req, res) => {
  console.log(req.cookies);
  console.log(req.cookies.isLogin);
  if (req.cookies.isLogin == "true") {
    res.send("cookie验证通过,登录成功");
  } else {
    res.send("登录失败");
  }
});

module.exports = router;
