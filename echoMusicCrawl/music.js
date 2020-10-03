const axios = require("axios"),
  fs = require("fs"),
  path = require("path");
let url = "http://www.app-echo.com/api/recommend/sound-day?page=";
function makeDir() {
  fs.mkdir(path.resolve(__dirname, "mp3"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("创建目录成功");
    }
  });
}
async function getPage(num) {
  let res = await axios.get(url + num);
  console.log(res.data);
  let _data = (res && res.data && res.data.list) || [],
    musicList = [];
  _data.forEach((item) => {
    if (item.sound && item.sound.source) {
      let title = item.sound.name,
        filename = path.parse(item.sound.source).name,
        content = `${title}, ${item.sound.source}, ${filename}\n`;
      fs.writeFile(
        path.resolve(__dirname, "music.txt"),
        content,
        { encoding: "utf-8", flag: "a" },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            // console.log("音乐名称写入成功");
          }
        }
      );
      musicList.push({ url: item.sound.source, name: filename });
    }
  });
  console.log(musicList);
  downMusic(musicList);
}
function downMusic(musicList) {
  musicList.forEach(async (item) => {
    let ws = fs.createWriteStream(
      path.resolve(__dirname, "mp3/", item.name + ".mp3")
    );
    console.log(path.resolve(__dirname, "mp3/", item.name + ".mp3"));
    let res = await axios.get(item.url, { responseType: "stream" });
    // return;
    res.data.pipe(ws);
    // 监听读取流关闭的时候写入流关闭
    res.data.on("close", function () {
      ws.close();
    });
  });
}
function init() {
  makeDir();
  getPage(1);
}
init();
