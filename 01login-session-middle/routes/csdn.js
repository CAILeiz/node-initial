const express = require("express");
const router = express.Router();

// 引入一个判断是否登录的中间件
function isLoginMid(req, res, next) {
  console.log("req.session", req.session);
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
/* GET home page. */
router.get("/data", isLoginMid, function (req, res, next) {
  res.send("我是数据页面");
});
router.get("/layout", (req, res) => {
  req.session.destroy((_) => {
    console.log("销毁session完毕");
  });
  res.send("成功退出");
});

module.exports = router;
