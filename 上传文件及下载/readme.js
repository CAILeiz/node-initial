// 文件上传的readme
// 1.引入multer模块  设置let upload = multer({ dest: "./public/upload" });
// 2.在upload.ejs文档中写入form 上传文件html action中设置POST请求接口/upload
// 3.在upload router实例中定义post接口

// 上传单个文件 配置upload.single("input配置的name名称")
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
// 上传多个文件 配置upload.array("input配置的name名称", 上传文件的数量)
// upload.array("imgfile", 5);
// req中会有一个files 上传文件的数组

// 限制上传文件的大小
let upload = multer({
  dest: "./public/upload",
  limits: { fileSize: 1024 * 1024 * 20, files: 2 },
});

// 文件下载
res.download(path.join(__dirname, "../public/download/del.png"));
