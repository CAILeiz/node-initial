let express = require("express");
let app = express();
app.get("/", function (req, res) {
  res.send("<h1 style='color: blue;'> hello world</h1>");
});
app.listen(8080, (_) => {
  console.log("服务器启动完成", "http://127.0.0.1:8080");
});
