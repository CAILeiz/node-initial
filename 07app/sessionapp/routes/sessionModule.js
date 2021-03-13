var express = require("express");
var router = express.Router();

// 设置 session 接口
router.get("/setSession", (req, res) => {
  // 凡是访问这个路径的都会返回一个session凭证
  // 登录之后 要能够快速地获取user的姓名, vip等级, 是否登录
  // 如果是明文传输的话 会被黑客中间路由截获 在无感情况下进行返回数据 所以我们用到了session 不用明文cookie
  req.session.isLogin = "true";
  req.session.username = "大磊";
  req.session.vipLevel = 5;
  // 设置 session过期时间
  // req.session.cookie.maxAge = 5 * 1000;
  res.send("登录状态已设置到session中");
});
// 登录
router.get("/getSession", (req, res) => {
  console.log(req.session);
  if (req.session.isLogin == "true") {
    res.send(
      `欢迎等级为${req.session.vipLevel} 的用户${req.session.username} <a href="/session/layout">退出登录</a>`
    );
  } else {
    res.send("尚未登录");
  }
});
// 退出登录接口

router.get("/layout", (req, res) => {
  // 销毁 session
  req.session.destroy((err) => {
    if (err) {
      res.send("未退出登录");
      throw err;
    }
    console.log("销毁成功");
    res.send("已退出登录");
  });
});
// 输出的session格式为
// Session {
//   cookie: {
//     path: '/',
//     _expires: 2020-11-07T04:09:57.560Z,
//     originalMaxAge: 60000,
//     httpOnly: true
//   },
//   isLogin: 'true',
//   username: '大磊',
//   vipLevel: 5
// }
module.exports = router;
