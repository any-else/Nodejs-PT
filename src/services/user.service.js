const connection = require("../configs/config.mysql");

const userService = {
  // nhận nhiệm vụ xử lý việc lấy cả người dùng
  getAllService: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(result);
      });
    });
  },

  getOneService: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE user_id = ?",
        id,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  createUserService: (newUser) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", newUser, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },

  editUserService: (id, newUserUpdate) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET ? WHERE user_id = ?",
        [newUserUpdate, id],
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  deleteUserService: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM users WHERE user_id = ?",
        id,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
};

module.exports = userService;
