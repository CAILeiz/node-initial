var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const crypto = require("crypto");
function jiami(str) {
  // 设置md5的算法
  var obj = crypto.createHash("md5");
  // 使用update进行加密 这个是二进制的一个加密
  obj.update(str);
  // 使用digest进行16进制数据的展示 转换成base64格式展示
  return obj.digest("hex");
}
let options = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "company",
};
let connection = mysql.createConnection(options);
connection.connect((err) => {
  if (err) throw err;
  console.log("数据库连接成功");
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("register");
});

router.post("/", function (req, res, next) {
  // 获取表单提交的用户名 密码 和 邮箱
  console.log(req.body);
  let { email, username, password } = req.body;
  password = jiami(password);
  // 判断邮箱是否已注册 如果已注册提示不能注册该邮箱 反之可以进行注册
  let isRegister = "select * from user where email = ?";
  connection.query(isRegister, [email], (err, results) => {
    if (err) throw err;
    console.log(results);
    if (results.length) {
      console.log(results.length);
      res.render("info", {
        title: "邮箱已注册,请重新注册",
        content: "邮箱已注册",
        href: "/register",
        hrefText: "注册页面",
      });
    } else {
      let strsql =
        "insert into user(email, username, password) values (? , ?, ?)";
      connection.query(strsql, [email, username, password]);
      res.render("info", {
        title: "注册成功",
        content: "注册成功即将进入登录页面",
        href: "/login",
        hrefText: "登录页面",
      });
    }
  });
});

module.exports = router;
