// 文件上传的readme
// 1.引入multer模块  设置let upload = multer({ dest: "./public/upload" });
// 2.在upload.ejs文档中写入form 上传文件html action中设置POST请求接口/upload
// 3.在upload router实例中定义post接口
// 4. post接口中添加中间件upload.single("imgfile"),这样就可以使用req.file获取到上传的文件信息了
var fileInfo = {
  fieldname: "imgfile",
  originalname: "新建文本文档.txt",
  encoding: "7bit", // 编码为二进制数据
  mimetype: "text/plain", // 文件类型
  destination: "./public/unload",
  filename: "99f460c2e3e870e7ee71232d535ceff2",
  path: "public\\unload\\99f460c2e3e870e7ee71232d535ceff2",
  size: 8279,
};
