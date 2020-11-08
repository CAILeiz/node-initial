var express = require("express");
var router = express.Router();
var multer = require("multer");
// fs模块用户重命名
const fs = require("fs");
// 配置上传对象指定的位置
let upload = multer({ dest: "./public/upload" });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("upload");
});
// upload.single("imgfile")设置上传单个文件 imgfile是上传文件input的name行内属性 当设置完这个属性之后会发现后面的req里面有一个file属性
router.post("/", upload.single("imgfile"), function (req, res, next) {
  console.log(req.file);
  let { filename, destination, originalname } = req.file;
  fs.rename(
    `${destination}/${filename}`,
    `${destination}/${filename}${originalname}`,
    (err) => {}
  );
  res.send(`<h1>上传成功</h1><img src='/upload/${filename}${originalname}'>`);
});
module.exports = router;
