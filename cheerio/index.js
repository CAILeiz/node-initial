const cheerio = require("cheerio"),
  axios = require("axios"),
  fs = require("fs"),
  path = require("path");
let parentLink = [],
  indexHTMLUrl = "https://www.doutula.com/article/list/?page=",
  allPageNum = 0;
getAllPageNUm();
async function getAllPageNUm() {
  let pageInfo = await axios.get(`${indexHTMLUrl}1`);
  let $ = cheerio.load(pageInfo.data),
    btnPagiinationLength = $(".pagination li").length;
  console.log(btnPagiinationLength);
  console.log(
    $(".pagination li")
      .eq(btnPagiinationLength - 2)
      .text()
  );
  allPageNum = $(".pagination li")
    .eq(btnPagiinationLength - 2)
    .text();
  // 初始化
  (function () {
    for (let i = 1; i <= allPageNum; i++) {
      console.log(123);
      getPageInfo(`${indexHTMLUrl}${i}`);
    }
  })();
}
// cheerio用来解析html或者xml文档
function getPageInfo(url) {
  axios.get(url).then((res) => {
    // 将获取到的数据放到cheerio中进行解析
    let $ = cheerio.load(res.data),
      reg = /(.*?)\d/gis;
    $("#home .col-sm-9>a").each((i, item) => {
      // 获取到所有的标签头url连接
      let parentUrl = $(item).attr("href"),
        parentTitle = $(item).find(".random_title").text();
      // 全部分类
      parentLink.push({ url: parentUrl, title: parentTitle });
    });
    // console.log(parentLink);
    getImgInfo(parentLink);
  });
}
function getImgInfo(parentLink) {
  // console.log(parentLink);
  parentLink.forEach((element) => {
    let res = axios.get(element.url);
    console.log(res);
    $ = cheerio.load(res);
    $(".pic-content img").each((i, item) => {
      console.log($(item).attr("src"));
      let imgUrl = $(item).attr("src");
      let extname = path.extname(imgUrl);
      let ws = fs.createWriteStream(
        `./img/${item.title}/${item.title}-${i}${extname}`
      );
      // 获取到详细信息之后写入图片
      sxios.get(
        imgUrl,
        { responseType: "stream" }.then((res) => {
          res.data.pipe(ws);
          res.data.on("close", (_) => {
            ws.close();
          });
        })
      );
    });
  });
}
