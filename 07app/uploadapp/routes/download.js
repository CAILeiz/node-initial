var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("recource.ejs");
});

router.get("/dl/:bookid", function (req, res, next) {
  if (req.params.bookid == 270) {
    res.download(path.join(__dirname, "../public/download/del.png"));
  } else {
    res.send("没有该资源");
  }
});

module.exports = router;
