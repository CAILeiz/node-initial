let puppeteer = require("puppeteer");
let fs = require("fs");
let axios = require("axios");
const { rejects } = require("assert");
async function test(params) {
  await fs.mkdir("./sexGril", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("图片库创建成功");
    }
  });
  // puppeteer.launch实例开启浏览器
  // 可以传入一个options对象，可以配置为有界面浏览器，同样可以配置为无界面浏览器
  // 无界面浏览器性能更高更快、有界面的一般用于前期调试，发布之后使用无界面的高效快速
  let options = {
    // 设置浏览器打开视图的宽高
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    // 打开有界面浏览器
    headless: false,
  };
  // 连接浏览器
  let browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  // 打开浏览器
  await page.goto(
    "https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B4%F3%D0%D8%D0%D4%B8%D0%C3%C3%D7%D3&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111"
  );
  // 生成图片 路径是当前路径
  await page.screenshot({ path: "baidu.png" });
  // 获取页面内容 获取到querySelectAll所有的元素
  let myElements = await page.$$eval(".imgitem", (elements) => {
    let eles = [];
    elements.forEach(async (item, index) => {
      // await dlWait(100 * index);
      console.log(item.getAttribute("data-objurl"));
      let eleObj = {
        href: item.getAttribute("data-objurl"),
        name: item.getAttribute("data-title"),
        index: index,
      };
      eles.push(eleObj);
    });
    return eles;
  });
  console.log(myElements);
  downSexGirl(myElements);

  // page.on("console", (eventMsg) => {
  //   console.log(eventMsg);
  // });
}
async function downSexGirl(elements) {
  elements.forEach(async (item) => {
    let ws = fs.createWriteStream("./sexGril/" + item.index + ".png");
    let res = await axios.get(item.href, { responseType: "stream" });
    res.data.pipe(ws);
    res.data.on("close", (_) => {
      console.log(item.name + "写入完成");
      ws.close();
    });
  });
}
function dlWait(timeout) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
test(); // 执行之后 会打开Google浏览器打开百度页面
