var express = require("express");
var router = express.Router();
const mysql = require("mysql");
let options = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "company",
};
let connection = mysql.createConnection(options);
connection.connect((err) => {
  if (err) throw err;
  console.log("连接成功");
});

let _getUser = "select * from user where email = ? and password = ?";
let _getUserName = "select * from user where email = ? and password = ?";
function hasUser(queryParams) {
  return new Promise((resolve, reject) => {
    connection.query(_getUser, queryParams, (err, results) => {
      console.log(err);
      console.log(results);
      if (results.length == 1) {
        _getUserName = results[0].username;
      }
      resolve(results.length);
    });
  });
}
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("login", {});
});

router.post("/", async function (req, res, next) {
  console.log(req.body);
  let queryParams = [req.body.email, req.body.password];
  console.log(queryParams);
  let _hasUser = await hasUser(queryParams);
  if (_hasUser) {
    req.session.username = _getUserName;
    console.log("登录成功");
    res.render("info", {
      title: "登录成功",
      content: "账号密码正确, 即将进入详情页面",
      href: "/csdn/data",
      hrefText: "详情页面",
    });
  } else {
    res.send("数据库中没有该人 登录失败");
  }
});

module.exports = router;
