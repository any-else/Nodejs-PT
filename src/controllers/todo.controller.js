const TodoService = require("../services/todo.service");

const TodoController = {
  createTodo: async (req, res) => {
    const { newTodo } = req.body;
    //lấy user từ cookies
    const userCurrent = JSON.parse(req.cookies.users);

    // thêm vào database
    console.log(newTodo);
    try {
      await TodoService.createTodoService(newTodo, userCurrent.user_id);
      res.status(201).json({
        message: "Tạo mới thành công",
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi server",
      });
    }
  },
};

module.exports = TodoController;
