const { rejects } = require("assert");
const events = require("events"),
  fs = require("fs");
let ee = new events.EventEmitter();
// 事件监听
ee.on("helloSuccess", (data) => {
  console.log("睡醒了学习");
  console.log(data);
});
ee.on("helloSuccess", (data) => {
  console.log("学习使我快乐");
  console.log(data);
});
ee.on("helloSuccess", (data) => {
  console.log("晚一点出去玩");
  console.log(data);
});
// 当我们读取完文件再出发上面注册的事件
// 封装一个异步函数
function dlReadFile(path) {
  console.log(path);
  return new Promise((resolve, rejects) => {
    fs.readFile(path, { encoding: "utf-8", flag: "r" }, (err, data) => {
      if (err) {
        rejects(err);
      } else {
        resolve(data);
        ee.emit("helloSuccess", data);
      }
    });
  });
}
async function test() {
  await dlReadFile("./os.js");
  console.log("执行完毕");
}
test();
