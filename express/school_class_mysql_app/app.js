const express = require("express");
let app = express();
let sqlQuery = require("./dlMysql");

app.get("/", async (req, res) => {
  let strSql = "select * from boss limit 0,2";
  let queryResult = await sqlQuery(strSql);
  console.log(Array.from(queryResult));
  res.end("这是首页");
});
app.get("/boss", (req, res) => {
  console.log(req);
  let strSql = "select bossname, age, sex from boss limit 0,2";
  let queryResult = await sqlQuery(strSql);
  console.log(Array.from(queryResult));
  res.end("这是老板页面");
})
app.listen(8080);
module.exports = app;
