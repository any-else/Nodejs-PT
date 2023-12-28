const connection = require("../configs/mysql.config");
const TodoService = {
  createTodoService: (newTodo, idUser) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO todos SET ?",
        { title: newTodo, user_id: idUser }, // fix cứng
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

module.exports = TodoService;
