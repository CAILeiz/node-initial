var express = require("express");
var router = express.Router();
var Md5 = require("../MD5");
const { route } = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/setcookie", (req, res) => {
  // 基础设置cookie, 有效期认为是一个会话,浏览器关闭会失效
  // maxAge设置失效时间, domain: 设置域名
  res.cookie("isLogin", "true", {
    httpOnly: true,
    // signed是给cookie进行加密操作的
    signed: true,
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
router.get("/adminSecret", (req, res) => {
  console.log(req.signedCookies);
  if (req.signedCookies.isLogin == "true") {
    res.send("cookie验证通过,登录成功");
  } else {
    res.send("登录失败");
  }
});
// 加密数据
router.get("/appSecret", (req, res) => {
  let secretStr = Md5.md5("true");
  setSecretCookie("true", secretStr);
  res.cookie("register", secretStr);
  res.send(`register key 加密成功 加密后的值为 ${secretStr}`);
});
// 解密数据
router.get("/getAppSecret", (req, res) => {
  let _cookie = req.cookies.register;
  console.log(secretCookie);
  console.log(req.cookies.register);
  let jiemiStr = getSecretCookie(_cookie);
  res.send("解密前" + req.cookies.register + "解密后: " + jiemiStr);
});

let secretCookie = {};
function setSecretCookie(str, secretStr) {
  secretCookie[secretStr] = str;
}
function getSecretCookie(secretStr) {
  return secretCookie[secretStr];
}

module.exports = router;
