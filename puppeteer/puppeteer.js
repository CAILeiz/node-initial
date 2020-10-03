let puppeteer = require("puppeteer");
async function test(params) {
  // puppeteer.launch实例开启浏览器
  // 可以传入一个options对象，可以配置为有界面浏览器，同样可以配置为无界面浏览器
  // 无界面浏览器性能更高更快、有界面的一般用于前期调试，发布之后使用无界面的高效快速
  let options = {
    // 设置浏览器打开视图的宽高
    defaultViewport: {
      width: 1400,
      height: 800,
    },
    // 打开有界面浏览器
    headless: false,
  };
  // 连接浏览器
  let browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  // 打开浏览器
  await page.goto("http://www.baidu.com");
  // 生成图片 路径是当前路径
  await page.screenshot({ path: "baidu.png" });
  // 获取页面内容 获取到querySelectAll所有的元素
  page.$$eval(".imgitem", (elements) => {
    elements.forEach((item) => {
      console.log(item.innerHTML);
    });
  });
  page.on("console", (...args) => {
    console.log(args);
  });
}
test(); // 执行之后 会打开Google浏览器打开百度页面
