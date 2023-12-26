const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "vuvanbui@18",
  database: "manager-todo",
});

connection.connect((err) => {
  if (err) {
    console.log("LỖI CONNECT");
    throw new Error(err);
  }

  console.log(" Kết nối tới database thành công");
});

// chưa export
module.exports = connection;
