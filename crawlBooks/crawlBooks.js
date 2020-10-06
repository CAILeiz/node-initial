const { rejects } = require("assert");
const { resolve } = require("path");
// 目标获取https://sobooks.cc/,所有书名和电子书链接
// 进入网站,获取整个网站所有页数
// 获取列表页的所有链接
// 进入每个点子书的详情页获取下载电子书的网盘地址
// 将获取的数据保存到book.txt文档中
const puppeteer = require("puppeteer"),
  fs = require('fs');
let httpUrl = "https://sobooks.cc/page/";
async function openBrowser() {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { height: 1080, width: 1920 },
  });
  let page = await browser.newPage();
  // 截取谷歌请求
  await page.setRequestInterception(true);
  page.on("request", interception => {
    let urlObj = url.parse(interception.url());
    if (urlObj.hostname == "googleads.g.doubleclick.net") {
      // 如果是谷歌的广告请求,放弃当次请求,谷歌广告请求慢
      interception.abort();
    } else {
      interception.continue();
    }
  })
  page.goto(`${httpUrl}1`);
  // 获取总页数
  let allPageNum = await page.$eval(
    ".pagination li:last-child span",
    (element) => {
      console.log(element);
      let reg = /\d+/gi;
      // 返回总页数
      return reg.match(element.innerText);
    }
  );
  // 当page.操作结束后返回关闭close
  page.close();
  for (let i = 1; i < array.length; i++) {
    await delay(4000 * i);
    getPageInfo(i);
  }
}
// 获取每页所有电子书的链接和名称 hrefList
async function getPageInfo(num) {
  let page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", interception => {
    let urlObj = url.parse(interception.url());
    if (urlObj.hostname == "googleads.g.doubleclick.net") {
      // 如果是谷歌的广告请求,放弃当次请求,谷歌广告请求慢
      interception.abort();
    } else {
      interception.continue();
    }
  })
  await page.goto(`${httpUrl}${num}`);
  let hrefList = await page.$$eval(
    ".card .card-item .thumn-img>a",
    (elements) => {
      let arr = [];
      elements.forEach((item, i) => {
        let elemObj = {
          href: item.getAttribute("href"),
          title: item.getAttribute("title"),
        };
        arr.push(elemObj);
      });
      return arr;
    }
  );
  page.close();
  console.log(hrefList);
  getBookInfo(hrefList)
}
async function getBookInfo (bookList) {
  // 定义book地址列表
  let bookAdressList = [];
  bookList.forEach(item => {
    await delay(4000 * i);
    let page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", interception => {
    let urlObj = url.parse(interception.url());
    if (urlObj.hostname.indexOf("google") != -1) {
      // 如果是谷歌的广告请求,放弃当次请求,谷歌广告请求慢
      interception.abort();
    } else {
      interception.continue();
    }
  })
    await page.goto(item.href);
    page.$eval(".e-secret a:last-child", elem => {
      bookAdressList.push({
        bookName: item.title,
        href: `${elem.getAttribute("href")}\n`
      })
    })
  })
  page.close();
  // 持久化书名
  bookAdressList.length && bookAdressList.forEach(item => {
    fs.writeFile("./book.txt", `${item.name} ===> ${item.href}`, { encoding: "utf-8", flag: "a" }, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("写入成功");
      }
    })
  })
}
function delay (timeout) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(`延迟时间为${timeout}`);
    }, timeout);
  })
}
openBrowser();
