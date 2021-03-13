# 服务器框架 express(多用) 升级版--> koa

1. 安装
   npm i express --save
   npm i express -g --save
   安装 express 脚手架
   npm i express-generator -g --save

2. 查看命令行的指令含义
   express -h
   options :
   --version 输出版本号
   -e，--ejs 添加对 ejs 模板引擎的支持
   --pug 添加对 pug 模板引擎的支持
   --hbs 添加对 handlebars 模板引擎的支持
   -H,--hogan 添加对 hogan.js 模板引擎的支持
   -v，--view <engine>添加对视图引擎(view) <engine>的支持(ejs |hbs |hjsljadelpugItwig/vash)(默认是 jade 模板引擎)工
   --no-view 创建不带视图引擎的项目
   -C，--css <engine>添加样式表引擎<engine>的支持(less |stylus |compass|sass)（(默认是普通的 css 文件)
   --git 添加.gitignore
   -f， --force 强制在非空目录下创建
   -h,--help 输出使用方法
   express --version 查看当前版本
   报错: express: 无法加载文件 XXX 说明是需要使用管理员身份去执行该命令

3. 重点
   创建一个 myapp 的 Express 应用,并使用 ejs 模板引擎
   [第一种方法]
   express --view=ejs app
   进入 app 并安装依赖
   cd myapp
   npm install
   在 packjson 中 配置 "local": "SET DEBUG=app:\* & npm start"
   [第二种] 创建一个 easyexpress 之后 npm i express
   创建一个 index.js 文件 文件写入以下内容
   let express = require("express");
   let app = express();
   app.get("/", function (req, res) {
   res.send("<h1 style='color: blue;'> hello world</h1>");
   });
   app.listen(8080, (\_) => {
   console.log("服务器启动完成", "http:127.0.0.1:8080");
   });
   之后 node index.js
   [第三种] \***\*\*\*\*\***\*\*\***\*\*\*\*\***
   在根目录中的终端直接输入 express project_name -e
   之后安装 npm i 安装依赖并启动项目即可

4. 在 winodw 下启动 express 应用
   set DEBUG=app:_ & npm start
   在 MacOS 或 Linux 使用以下命令启用 Express
   DEBUG=app:_ npm start
