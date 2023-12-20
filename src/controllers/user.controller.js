const connection = require("../configs/config.mysql");
const getAll = (req, res) => {
  connection.query("SELECT * FROM users", (error, result) => {
    if (error) {
      throw new Error(error);
    }
    res.status(200).json(result);
  });
};

const getOne = (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM users WHERE user_id = ?",
    id,
    (error, result) => {
      if (error) {
        console.log("có lỗi rồi", error);
        res.status(400).json({
          message: "BAD_REQUEST",
        });
      }
      res.status(200).json({
        message: "lấy thành công",
        data: result[0],
      });
    }
  );
};

const createUser = (req, res) => {
  const { user_name, email, pass_word } = req.body;
  //c1: ko đưa ra các cột => mặc định là bạn phải truyền 100% các cột theo dúng thứ tự trong bảng
  // connection.query(
  //   "INSERT INTO users SET ?",
  //   { user_name, email, pass_word },
  //   (error, result) => {
  //     if (error) {
  //       throw new Error(error);
  //     }
  //     res.status(200).json({
  //       message: "User created successfully",
  //     });
  //   }
  // );
  // c2: thêm mới nhưng có khai báo ra các trường dữ liệu trong bảng
  connection.query(
    "INSERT INTO users (user_name, email, pass_word) VALUES (?, ?, ?)",
    [user_name, email, pass_word],
    (error, result) => {
      if (error) {
        throw new Error(error);
      }
      res.status(200).json({
        message: "User created successfully",
      });
    }
  );
};

const editUser = (req, res) => {
  const { id } = req.params;
  const { user_name, email, pass_word } = req.body;
  connection.query(
    "UPDATE users SET ? WHERE user_id = ?",
    [{ user_name, email, pass_word }, id],
    (error, result) => {
      if (error) {
        console.log("có lỗi rồi", error);
        res.status(400).json({
          message: "BAD_REQUEST",
        });
      }
      res.status(203).json({
        message: "Update thành công",
      });
    }
  );
};

const removeUser = (req, res) => {
  const { id } = req.params;
  //đi tìm xem có không
  //có mới xoá
  connection.query(
    "DELETE FROM users WHERE user_id = ?",
    id,
    (error, result) => {
      if (error) {
        res.status(400).json({
          message: "BAD_REQUEST",
        });
      }
      res.status(200).json({
        message: "Delete thanh cong",
      });
    }
  );
};
//export
module.exports = {
  getAll,
  getOne,
  createUser,
  editUser,
  removeUser,
};
