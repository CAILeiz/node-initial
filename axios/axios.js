const axios = require("axios"),
    httpUrl = "https://v.sogou.com/film/list/style-+zone-+year-+starring-.html";
// console.log(axios);
axios({
    method:'get',
    url: httpUrl
  })
    .then( res => {
        // console.log(res);
        let reg = /<div id="sort_box_0" class="sort-box sort-unfold">(.*?)\t<a href="\/film\/list\/style-%E6%81%90%E6%80%96\.html"/gis;
        console.log(reg.exec(res)); 
        // res.
});