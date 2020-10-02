const fs = require("fs");
fs.readFile("./hello.txt", {encoding: "utf-8", flag: "r"}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        dl.emit("helloSuccess", data);
        // 1.数据库查看所有学生的详细信息
        // 2.统计年龄比例
        // 3.查看所有用户学校的详细信息
    }
})
let dl = {
    event: {
        // 这里存放的是不同事件名称的数组
        // helloSuccess [fn, fn, fn]
    },
    on: function(fnName, fn) {
        if(this.event.hasOwnProperty(fnName)) {
            this.event[fnName].push(fn);
        } else {
            this.event[fnName] = [];
            this.event[fnName].push(fn);
        }
    },
    emit:function(fnName, data) {
        if(this.event.hasOwnProperty(fnName)) {
            this.event[fnName].forEach(itemFn => {
                itemFn(data);
            });
        } else {
            console.log("该事件没有被注册");
        }
    }
}
dl.on("helloSuccess", function(data) {
    console.log("数据库查看所有学生的详细信息");
    console.log(data);
})
dl.on("helloSuccess", function(data) {
    console.log("统计年龄比例");
    console.log(data);
})
dl.on("helloSuccess", function(data) {
    console.log("查看所有用户学校的详细信息");
    console.log(data);
})