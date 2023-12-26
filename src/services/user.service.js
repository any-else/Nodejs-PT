const connection = require("../configs/mysql.config");

const UserService = {
  getAllUserService: () => {
    return new Promise((resolve, reject) => {
      // viết câu lệnh truy vấn
      connection.query("SELECT * FROM users", (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  createUserService: (user_name, email, password) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO users SET ?",
        { user_name, email, pass_word: password },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result[0]);
        }
      );
    });
  },
};

module.exports = UserService;
