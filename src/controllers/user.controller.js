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
      const { username, email, password } = req.body;
      //gọi tới service
      await UserService.createUserService(username, email, password);
      res.status(201).json({
        message: "thành công tạo mới",
        status: "oke",
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
      //tìm user theo email
      const user = await UserService.findUserByEmail(email);
      //so sánh mật khẩu
      const isCheckPassword = user.pass_word == password;

      if (!user || !isCheckPassword) {
        return res.status(400).json({
          message: "Thông tin tài khoản mật khẩu không chính xác",
        });
      }
      return res.status(200).cookie("users", JSON.stringify(user)).json({
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
