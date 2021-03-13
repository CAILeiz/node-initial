let puppeteer = require("puppeteer");
let fs = require("fs");
let axios = require("axios");
const { rejects } = require("assert");
async function test(params) {
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
  let page = await browser.newPage(); // 备注 page.xx返回的都是promise
  // 打开浏览器
  await page.goto(
    "https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B4%F3%D0%D8%D0%D4%B8%D0%C3%C3%D7%D3&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111"
  );
  // 截图 生成图片 路径是当前路径的同级路径
  await page.screenshot({ path: "baidu.png" });
  // 通过点击页面跳转的方式
  let elementHandles = await page.$$(".imgitem");
  console.log(elementHandles);
  // 这里的2指的是第三个元素 元素下标是从0开始的
  elementHandles[2].click();
  // 如果是电影网站我们需要代码去操作输入框并写入搜索内容去点击搜索
  let inputSearch = page.$(".search .formhue");
  (await inputSearch).focus();
  // 往输入框输入内容
  page.keyboard.type("孙悟空");
  // 点击按钮回车
  let btnElem = page.$(".search .btn");
  (await btnElem).click();
  // 因为这种电影网站一般最外层包裹着一个a标签会有默认事件 阻止默认事件
  await page.$(".searcher", (item) => {
    item.addEvenetListener("click", (event) => {
      event.stopProperation();
    });
  });
  return;
  // 获取页面内容 获取到querySelectAll所有的元素
  // page.$$eval获取到的是真是的元素信息
  let myElements = await page.$$eval(".imgitem", (elements) => {
    let eles = [];
    elements.forEach(async (item, index) => {
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
  // 重新打开一个新页面
  let pageOn = await browser.newPage();
  pageOn.goto(myElements[2].href);
  page.on("console", (eventMsg) => {
    console.log(eventMsg);
  });
}
test(); // 执行之后 会打开Google浏览器打开百度页面
