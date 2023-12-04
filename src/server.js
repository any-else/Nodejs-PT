const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("node:fs");
const path = require("node:path");

//middleware global
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
app.get("/api/v1/product", (req, res) => {
  // res.status(200);
  // res.send("ĐâY LÀ PRODUCT");

  res.status(200).json({
    message: "oke",
    data: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
    ],
  });
});
//bài 1
app.get("/", (req, res) => {
  res.status(200).send("This is HomePage");
});

app.get("/overview", (req, res) => {
  res.status(200).send("<h1>Overview</h1>");
});

app.get("/product", (req, res) => {
  res.status(200).send("This is Product Page");
});
//get all user
app.get("/api/v1/users", (req, res) => {
  const pathUser = path.join(__dirname, "../data/user.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  res.status(200).json(JSON.parse(dataUser));
});

//get user by id
app.get("/api/v1/users/:id", (req, res) => {
  //handle logic
  const userId = req.params.id;
  console.log("userId", userId);
  //đọc data ra
  const pathUser = path.join(__dirname, "../data/user.json");
  const dataUser = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(dataUser);
  const matchUser = listUser.find((user) => user._id == userId);
  console.log("matchUser", matchUser);
  if (matchUser) {
    res.status(200).json(matchUser);
  } else {
    res.status(400).json({
      message: "không tìm thấy user",
    });
  }
});

// tạo mới user
app.post("/api/v1/users", (req, res) => {
  const dataUser = req.body;
  console.log("dataUser", dataUser);
  const pathUser = path.join(__dirname, "../data/user.json");
  const usersJson = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(usersJson);
  //find
  const findUserByEmail = listUser.find((user) => user.email == dataUser.email);

  if (!findUserByEmail) {
    listUser.unshift(dataUser);
    fs.writeFileSync(pathUser, JSON.stringify(listUser), "utf-8");
    res.status(200).json({
      message: "thêm mới thành cồng",
    });
  } else {
    res.status(400).json({
      message: "email đã tồn tại",
    });
  }
});
// update và delete
app.patch("/api/v1/users/:id", (req, res) => {
  const idUser = req.params.id;
  const dataUserBody = req.body;
  const pathUser = path.join(__dirname, "../data/user.json");
  const userJson = fs.readFileSync(pathUser, "utf-8");
  const listUser = JSON.parse(userJson);

  // tiến hành đi tìm id tương ứng
  const indexUserUpdate = listUser.findIndex((user) => user._id == idUser);

  if (indexUserUpdate != -1) {
    listUser[indexUserUpdate] = dataUserBody;
    fs.writeFileSync(pathUser, JSON.stringify(listUser), "utf-8");
    res.status(200).json({
      message: "update thành công",
    });
  } else {
    res.status(400).json({
      message: "không tìm thấy user",
    });
  }
});

// PAGE NOT FOUND
app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// chạy server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
