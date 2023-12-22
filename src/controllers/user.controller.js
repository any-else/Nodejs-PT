const connection = require("../configs/config.mysql");
const userService = require("../services/user.service");
const getAll = async (req, res) => {
  try {
    const listUser = await userService.getAllService();
    res.status(200).json({
      message: "lấy thành công",
      data: listUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Truy vấn lỗi",
      error: error,
    });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getOneService(id);
    if (!user[0]) {
      res.status(400).json({
        message: "BAD_REQUEST",
      });
    }
    res.status(200).json({
      message: "thành công",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi database rồi",
      error: error,
    });
  }
};

const createUser = async (req, res) => {
  const { user_name, email, pass_word } = req.body;

  try {
    const newUser = {
      user_name,
      email,
      pass_word,
    };
    await userService.createUserService(newUser);
    res.status(200).json({
      message: "Thêm mới thành công",
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { user_name, email, pass_word } = req.body;
  const newUserUpdate = {
    user_name,
    email,
    pass_word,
  };
  /**
   * mình có id => đi tìm kiếm nó ra user => (có tất cả filed)
   *  nếu như mà các dữ liệu của body có data thì cập nhật lại
   *  không thì giữ nguyên các trường còn lại
   *
   * => tạo ra update mới ném editUserService
   */
  try {
    const editUser = await userService.editUserService(id, newUserUpdate);
    res.status(200).json({
      message: "cập nhật thành công",
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUserService(id);
    res.status(200).json({
      message: "xoá thành công",
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server",
      error: error,
    });
  }
};
//export
module.exports = {
  getAll,
  getOne,
  createUser,
  editUser,
  removeUser,
};
