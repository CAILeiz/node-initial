const mysql = require("mysql");
let options = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mall",
};
let connection = mysql.createConnection(options);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("连接成功");
  }
});

function sqlQuery(sql, arr) {
  return new Promise((resolve, reject) => {
    connection.query(sql, arr, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
module.exports = sqlQuery;
