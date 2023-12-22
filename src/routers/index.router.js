const userRoute = require("./users.route");
const productRoute = require("./product.route");

const rootRoute = (app) => {
  userRoute(app);
  productRoute(app);
};

module.exports = rootRoute;
