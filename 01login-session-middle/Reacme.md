# 目标 用户只有登录了才会能看到数据详情

# 判断方式 在访问数据路由的时候增加一个中间件函数, 判断有没有设置 req.session.username

```js
function isLoginMid(req, res, next) {
  console.log(req.session);
  if (req.session.username) {
    // 已登录进入下一个环节 --> 目前下一个环节是数据页面
    next();
  } else {
    // res.send("尚未登录, 不能访问数据页面 ");
    res.render("info", {
      title: "未登录",
      content: "尚未登录,请进入登录页面进行登录",
      href: "/login",
      hrefText: "登录页",
    });
  }
}
```

3. 访问数据页面 未检测到 session 中的 username,跳转到 info.ejs 信息页进行登录
4. 点击登录 info.ejs 中有 form 表单 配置的 post 请求的/login 接口 用来登录
5. 配置 login app 模块 定义/login post 接口 根据请求参数中的 email 和 password 从数据库中查询是否有该用户
   如果有设置 session.username 为数据库此行数据的 username 否则再次跳转到 info 页面进行跳转登录
6. 重新访问数据页面 此时会发现 username 已经设置 所以可以查看
