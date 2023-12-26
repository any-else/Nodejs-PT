const userRoute = require("./user.route");
const todoRoute = require("./todo.router");

const rootRoute = (app) => {
  userRoute(app);
  todoRoute(app);
};

module.exports = rootRoute;
