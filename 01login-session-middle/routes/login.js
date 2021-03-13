var express = require("express");
var router = express.Router();
const mysql = require("mysql");
let options = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "facade_pc_account",
};
let connection = mysql.createConnection(options);
connection.connect((err) => {
  if (err) throw err;
  console.log("连接成功");
});

let _getUser = "select * from users where username = ?";
let getUserName;
function hasUser(queryParams) {
  return new Promise((resolve, reject) => {
    connection.query(_getUser, queryParams, (err, results) => {
      let len = (results && results.length) || 0;
      if (len) {
        getUserName = results[0].name;
      }
      resolve(len);
    });
  });
}

let regStr = "insert into users (username, password) values (?, ?)";
function register(regParams) {
  console.log("regParams", regParams);
  return new Promise((resolve, reject) => {
    connection.query(regStr, regParams, function (err) {
      console.log("err", err);
      resolve();
    });
  });
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("login", {});
});

router.post("/", async function (req, res, next) {
  console.log(req.body);
  const { usernmae, password } = req.body;
  let queryParams = [usernmae, password];
  let _hasUser = await hasUser(queryParams);
  if (_hasUser) {
    req.session.username = getUserName;
    res.json({
      username,
      password,
    });
  } else {
    let result = await register(queryParams);
    console.log(
      `username: ${queryParams[0]} - password-${queryParams[1]}的用户注册成功`
    );
    let allUsers = await getAllUsers();
    res.json(Array.from(allUsers));
    return;
    res.send("数据库中没有该人 登录失败");
  }
});
function getAllUsers() {
  return new Promise((resolve, reject) => {
    let str = "select * from users";
    connection.query(str, (err, data) => {
      resolve(data);
    });
  });
}

module.exports = router;
