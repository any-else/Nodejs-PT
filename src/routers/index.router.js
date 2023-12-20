const userRoute = require("./users.route");
const rootRoute = (app) => {
  userRoute(app);
};

module.exports = rootRoute;
