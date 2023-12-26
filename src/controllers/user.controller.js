const UserService = require("../services/user.service");

const UserController = {
  getAll: async (req, res) => {
    try {
      // gọi tới service
      const data = await UserService.getAllUserService();
      res.status(200).json({
        message: "oke",
        user: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi server",
        error: error,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      // handle lấy thông từ người dùng
      const { user_name, email, password } = req.body;
      //gọi tới service
      await UserService.createUserService(user_name, email, password);
      res.status(201).json({
        message: "tạo mới thành công",
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi server",
      });
    }
  },

  login: async (req, res) => {
    // check xem user có tồn tại trong database hay không ? => có ok =>ko có tài khoản
    try {
      const { email, password } = req.body;
      const user = await UserService.findUserByEmail(email);
      if (!user) {
        res.status(400).json({
          message: "Không tìm tài khoản của bạn",
        });
      }
      res.status(200).json({
        message: "login thành công",
        user: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "lỗi server",
      });
    }
  },
};

module.exports = UserController;
