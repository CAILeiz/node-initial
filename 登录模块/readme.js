// 1.目标 用户只有登录了才会能看到数据详情
// 2.判断方式 在访问数据路由的时候增加一个中间件函数, 判断有没有设置 req.session.username
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

// 3.访问数据页面 未检测到session中的username,跳转到info.ejs信息页进行登录
// 4.点击登录 info.ejs中有form表单 配置的post请求的/login接口 用来登录
// 5.配置login app模块 定义/login post接口 根据请求参数中的email 和 password从数据库中查询是否有该用户 如果有设置session.username为数据库此行数据的username 否则再次跳转到info页面进行跳转登录
// 6. 重新访问数据页面 此时会发现username已经设置 所以可以查看
