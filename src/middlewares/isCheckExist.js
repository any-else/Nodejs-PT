const path = require("node:path");
const fs = require("node:fs");
const isCheckExist = (req, res, next) => {
  /**
   * requirement: kiem tra xem user co ton tai trong user.json hay khong
   *  buoc 1: lay id va email tren url xuong
   *  buoc 2: doc dataUser ra
   * buoc 3: kiem tra xem user lay tren param co ton tai hay khong
   * buoc 4: if(co) => tiep ko tra loi ko co user
   */
  //b1
  const idUser = req.query.id;
  const emailUser = req.query.email;
  //b2
  const pathUser = path.join(__dirname, "../../data/user.json");
  const dataJsonUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataJsonUser);
  //b3
  const findUserById = listUser.find((user) => user._id == idUser);
  const findUserByEmail = listUser.find((user) => user.email == emailUser);
  console.log({ findUserByEmail, findUserById });
  //b4
  if (findUserById && findUserByEmail) {
    next();
  } else {
    res.status(401).json({
      message: "khong co quyen",
    });
  }
};

module.exports = isCheckExist;
