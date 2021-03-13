var express = require("express");
var router = express.Router();
import mysql from "../utils/mysql";

router.post("/users/add", async function (req, res, next) {
  console.log(req.body);
  const { username, password } = req.body;
  let result = await mysql(
    "insert into users (username, password) values (?, ?)",
    [username, password]
  );
  res.setHeader("Content-type", "text/html;charset=UTF-8");
  res.send({});
});

router.post("/users/modify", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/users/delete", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/users/paging/all", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
