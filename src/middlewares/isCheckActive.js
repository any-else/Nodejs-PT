const path = require("node:path");
const fs = require("node:fs");
const isCheckActive = (req, res, next) => {
  //fix cung truong hop vua vu@gmail.com

  /**
   * buoc 1: doc duong dan, doc data ra
   * buoc 2 di tim user vu vua tao
   * buoc 3: minh gan data vao request
   * buoc 4: minh check neu user active ma false => khong cho vao if (active=true) thi cho vo
   *
   */
  //doc data va lay ra data fix cung
  const pathUser = path.join(__dirname, "../../data/user.json");
  const dataJsonUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataJsonUser);
  const dataVu = listUser.find(
    (user) => user._id == "5c8a1ec62f8fb814b56fa183"
  );

  // check user active
  if (dataVu.active) {
    //gan dataVu vao request
    req.dataVu = dataVu;
    next();
  } else {
    res.status(500).send("User khong active");
  }
};

module.exports = isCheckActive;
