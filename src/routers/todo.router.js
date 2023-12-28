const TodoController = require("../controllers/todo.controller");

const todoRoute = (app) => {
  app.post("/api/v1/todo", TodoController.createTodo);
};
module.exports = todoRoute;
