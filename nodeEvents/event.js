const { rejects } = require("assert");
const events = require("events"),
    fs = require("fs");
const { resolve } = require("path");
let ee = new events.EventEmitter();
// 事件监听
ee.on("helloSuccess", _ => {
    console.log("睡醒了学习");
    console.log(_);
})
ee.on("helloSuccess", _ => {
    console.log("学习使我快乐");
    console.log(_);
})
ee.on("helloSuccess", _ => {
    console.log("晚一点出去玩");
    console.log(_);
})
// 当我们读取完文件再出发上面注册的事件
// fs.readFile("./hello.txt", {encoding: "utf-8", flag: "r"}, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         ee.emit("helloSuccess", data);
//     }
// })
// 封装一个异步函数
function dlReadFile(path) {
    return new Promise( (resolve, rejects) => {
        fs.readFile(path, {encoding: "utf-8", flag: "r"}, (err, data) => {
            if(err) {
                rejects(err);
            } else {
                console.log(data);
                resolve(data);
                ee.emit("helloSuccess", data);
            }
        })
    })
}
async function test() {
    await dlReadFile("./hello.txt");
    console.log("执行完毕");
}
test();