let mysql = require("./mysql");
const express = require("express");
const app = express();
let str;
app.get("/getBoosById/:id", async (req, res) => {
  console.log(req.params.id);
  if (!req.params.id) {
    res.send(`data: {
  }`);
    return;
  }
  let id = req.params.id;
  str = `select * from boss where id = ?`;
  let results = await mysql(str, [id]);
  res.send(JSON.stringify(results));
});
app.get("/", (req, res) => {
  res.send("我是9999端口的服务");
});
console.log("http://localhost:9999/");
app.listen(9999);
