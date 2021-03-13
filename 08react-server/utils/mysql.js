const mysql = require("mysql");
const options = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "facade_pc_account",
};
const connerction = mysql.createConnection(options);
connerction.connect((err) => {
  if (!err) {
    console.log("连接成功");
  } else {
    throw new Error(err);
  }
});
function query(str, params) {
  return new Promise((resolve, reject) => {
    connerction.query(str, params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = query;
