var express = require("express");
var router = express.Router();
var multer = require("multer");
// fs模块用户重命名
const fs = require("fs");
// 配置上传对象指定的位置 以及限制文件的大小为20M 1024b * 1024 = 1024kb = 1M
let upload = multer({
  dest: "./public/upload",
  limits: { fileSize: 1024 * 1024 * 20, files: 2 },
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("ajax");
});
// upload.single("imgfile")设置上传单个文件 imgfile是上传文件input的name行内属性 当设置完这个属性之后会发现后面的req里面有一个file属性
// upload.single是一个函数 参数是传的input的name名称
router.post("/", upload.single("imgfile"), function (req, res, next) {
  console.log(req);
  console.log(req.file);
  let { filename, destination, originalname } = req.file;
  fs.rename(
    `${destination}/${filename}`,
    `${destination}/${filename}${originalname}`,
    (err) => {}
  );
  res.json({
    isUpload: true,
    data: {
      filename: `/${filename}${originalname}`,
      dest: "/upload",
    },
  });
});
router.post("/more", upload.array("imgfile", 2), function (req, res, next) {
  // console.log(req);
  console.log(req.files);
  req.files.forEach((item) => {
    let { filename, destination, originalname } = item;
    fs.rename(
      `${destination}/${filename}`,
      `${destination}/${filename}${originalname}`,
      (err) => {}
    );
  });
  res.send(`<h1>上传成功</h1>${req.files.length}`);
});
module.exports = router;
