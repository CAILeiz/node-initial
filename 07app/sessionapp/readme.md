session 的本质和原理就是加密的 cookie 也是关闭浏览器就会消失
session node 原生自带是没有的需要安装 session 模块
node 使用的话需要安装 express-session 之后引入 使用 app.use 中间件即可
const session = reqire("session");
session(options);

一、关于 session
session 是另一种记录客户状态的机制，与 cookie 保存在客户端浏览器不同，session 保存在服务器当中;
当客户端访问服务器时，服务器会生成一个 session 对象，对象中保存的是 key:value 值，同时服务器会将 key 传回给客户端的 ookie 当中;
当用户第二次访问服务器时，就会把 cookie 当中的 key 传回到服务器中，最后服务器会吧 value 值返回给客户端。
因此上面的 key 则是全局唯一的标识，客户端和服务端依靠这个全局唯一的标识来访问会话信息数据。
二、设置 session
我们使用 express-session 模块来设置 session1.安装 express-session
cnpm insta17 express-session --save2.引入 express-session 模块
const session=require("express-session"); 3.设置 session
session(options);
如下列代码︰
const express=require( "express ");
const session=require( "express-session");
var app=expressO;
