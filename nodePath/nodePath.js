let path = require("path");
// extname 读取路径后缀名
let strPath = "http://127.0.0.1/index.name";
console.log(path.extname(strPath));
// resolve 把一个路径或路径片段的序列解析为一个绝对路径 
console.log(path.resolve("foo",'/bar',"bar"));  // 输出C:\bar\bar
// 原理：给定给定路径的序列是""从左到右"被处理的，后面的path一次解析，知道构造成一个绝对路径
// join 使用平台特定的分隔符把全部给定的path连接到一起，并规范化的路径
console.log(path.join(__dirname, "./template.js")); // 输出为C:\Users\19129\Desktop\node\nodePath\template.js
console.log(path.join("/foo", "bar", "./baz")); // 输出\foo\bar\baz
console.log(path.join("/foo", "bar", "/baz", "..")); // 输出 \foo\bar
console.log(__dirname);
console.log(__filename); // 输出C:\Users\19129\Desktop\node\nodePath\nodePath.js
console.log(path.isAbsolute("./name")); // 输出为false
console.log(path.parse(__filename));
// parse 解析结果如下 解析出路径，目录，拓展名，文件名
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\19129\\Desktop\\node\\nodePath',
//   base: 'nodePath.js',
//   ext: '.js',
//   name: 'nodePath'
// }
// __dirname 获取当前执行目录的完整路径 --> 这个是文件夹目录
// __filename 获取当前文件的完整绝对路径 --> 这个是文件当前执行文件的目录
// path.isAbsolute() 判断是不是绝对路径