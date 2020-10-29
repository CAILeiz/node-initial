const puppeteer = require("puppeteer");
const fs = require("fs");
let count = 1;
let intervalTime = 5 * 60 * 1000;
async function start() {
  let options = {
    // 设置浏览器打开视图的宽高
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    // 打开有界面浏览器
    headless: true,
  };
  var browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106988407"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/108330340"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/108180117"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/108987705"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/108977411"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/108322264"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107962618"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107944625"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107902518"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107838213"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107740832"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107731369"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107457190"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107365409"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107266959"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107441679"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106985375"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106910701"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106900676"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106748899"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106719468"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106697769"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106523043"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106634700"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106419383"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106397189"
  );
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84196107");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84060715");
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105580489"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105579844"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105579570"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105579248"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105575995"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105560459"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105505440"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105492751"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105680236"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105700550"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105681799"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105681483"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105681126"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105676499"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105676499"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105659469"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105658962"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105657555"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105653512"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105581478"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105453474"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105380787"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105359221"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105247077"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105247077"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105240634"
  );
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84339079");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84319697");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84225816");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84135402");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84103690");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/84061310");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/83990730");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/83990572");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/83959151");
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107911581"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/107447942"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106985262"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106640225"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106477903"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106404802"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106384667"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106382927"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106377508"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106355687"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106288461"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/106037145"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105824826"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105824708"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105824522"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105817719"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105701717"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105680697"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105675930"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105560659"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105560459"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105494329"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105451539"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105379786"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105244779"
  );
  await page.goto(
    "https://blog.csdn.net/qq_40860137/article/details/105146554"
  );
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/83958992");
  await page.goto("https://blog.csdn.net/qq_40860137/article/details/83991265");
  page.close();
}
setInterval((_) => {
  let time = (function () {
    let date = new Date();
    let year = date.getFullYear();
    let month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  })();
  console.log("我执行了");
  console.log(time);
  start();
}, intervalTime);
