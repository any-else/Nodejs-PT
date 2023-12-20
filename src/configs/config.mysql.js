const mysql2 = require("mysql2");

// khởi tạo kết nối
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: "demo-connect",
  password: "vuvanbui@18",
});
// kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("ket noi oke");
});
// xuất ra đẻ sử dụng ở file bên ngoài
module.exports = connection;
