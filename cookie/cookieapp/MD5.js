const crypto = require("crypto");
module.exports = {
  // MD5封装
  MD5_SUFFIX: "s5w84&&d4d473885s2025s5*4s2",
  md5: function (str) {
    // 设置md5的算法
    var obj = crypto.createHash("md5");
    // 使用update进行加密 这个是二进制的一个加密
    obj.update(str);
    // 使用digest进行16进制数据的展示 转换成base64格式展示
    return obj.digest("hex");
  },
};
