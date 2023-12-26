const urlEndpoint = "/api/v1/users";
const UserController = require("../controllers/user.controller");
const userRoute = (app) => {
  // get
  app.get(urlEndpoint, UserController.getAll);
  //post
  app.post(urlEndpoint, UserController.createUser);
  //login
  app.post(`${urlEndpoint}/login`, UserController.login);
};

module.exports = userRoute;
