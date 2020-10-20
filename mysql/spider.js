let mysql = require("mysql"),
  axios = require("axios"),
  cheerio = require("cheerio");
let page = 1;
let count = 1;
// 获取第N个页面的书籍
async function getPageBook() {
  let res = await axios.get("http://cn.epubee.com/books/");
  // console.log(res.data);
  let $ = cheerio.load(res.data);

  console.log($("#get_ebook_list .list_title a").length);
  // $("#get_ebook_list .list_title a").each((i, elem) => {
  //   console.log($(elem).attr("href"));
  // });
}
getPageBook();
