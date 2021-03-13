# 文件上传的 readme

1. 引入 multer 模块 设置 let upload = multer({ dest: "./public/upload" });
2. 在 upload.ejs 文档中写入 form 上传文件 html action 中设置 POST 请求接口/upload
3. 在 upload router 实例中定义 post 接口 上传单个文件 配置 upload.single("input 配置的 name 名称")
4. post 接口中添加中间件 upload.single("imgfile"),这样就可以使用 req.file 获取到上传的文件信息了

```js
   var fileInfo = {
   fieldname: "imgfile",
   originalname: "新建文本文档.txt",
   encoding: "7bit", 编码为二进制数据
   mimetype: "text/plain", 文件类型
   destination: "./public/unload",
   filename: "99f460c2e3e870e7ee71232d535ceff2",
   path: "public\\unload\\99f460c2e3e870e7ee71232d535ceff2",
   size: 8279,
   };
   上传多个文件 配置 upload.array("input 配置的 name 名称", 上传文件的数量)
   upload.array("imgfile", 5);
   req 中会有一个 files 上传文件的数组
```

5. 限制上传文件的大小
   let upload = multer({
   dest: "./public/upload",
   limits: { fileSize: 1024 _ 1024 _ 20, files: 2 },
   });
6. 文件下载
   res.download(path.join(\_\_dirname, "../public/download/del.png"));
