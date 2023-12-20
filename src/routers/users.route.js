const {
  getAll,
  getOne,
  createUser,
  editUser,
  removeUser,
} = require("../controllers/user.controller");

const endPointUser = "/api/v1/user";
const userRoute = (app) => {
  // lấy tất cả
  app.get(endPointUser, getAll);
  // lấy một
  app.get(`${endPointUser}/:id`, getOne);
  // thêm mới
  app.post(endPointUser, createUser);
  // sửa theo id hoặc email
  app.patch(`${endPointUser}/:id`, editUser);
  //xoá một với id hoặc email
  app.delete(`${endPointUser}/:id`, removeUser);
};

module.exports = userRoute;
