const express = require("express");
const path = require("node:path");
const fs = require("node:fs");
const bodyParser = require("body-parser");
const isCheckExist = require("./middlewares/checkExist");
const app = express();

//middleware global
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cấu hình path và đọc dữ liệu ra
const pathQuestions = path.join(__dirname, "../data/questions.json"); // pathQuestions == C:/Users/admin/Desktop/chua-bai-2-express/data/questionsjson
const dataQuestionJson = fs.readFileSync(pathQuestions, "utf-8");
const listQuestion = JSON.parse(dataQuestionJson);
// router
//get all
app.get("/api/v1/questions", (req, res) => {
  // handle logic
  res.status(200).json({
    message: "thành công",
    data: listQuestion,
  });
});
// search theo content
app.get("/api/v1/questions/search", isCheckExist, (req, res) => {
  // handle logic
  const { q } = req.query;
  const newSearchContent = listQuestion.filter((quest) =>
    quest.content.includes(q)
  );
  if (newSearchContent.length > 0) {
    res.status(200).json({
      message: "oke",
      data: newSearchContent,
    });
  } else {
    res.status(200).json({
      message: "không tìm thấy tên tương ứng",
    });
  }
});

// get theo id
app.get("/api/v1/questions/:id", isCheckExist, (req, res) => {
  // const id = req.params.id
  const { id } = req.params; // destructuring
  const questionById = listQuestion.find((quest) => quest.id == id);
  if (questionById) {
    res.status(200).json({
      message: "oke",
      data: questionById,
    });
  } else {
    res.status(400).json({
      message: "không tìm thấy question",
    });
  }
});
// post
app.post("/api/v1/questions", isCheckExist, (req, res) => {
  const { content, like, dislike } = req.body;
  const newQuestion = {
    id: Date.now(),
    content,
    like,
    dislike,
  };
  listQuestion.unshift(newQuestion);

  fs.writeFileSync(pathQuestions, JSON.stringify(listQuestion));
  res.status(201).json({
    message: "thêm mới thành công",
  });
});
// sửa (patch)
app.patch("/api/v1/questions/:id", isCheckExist, (req, res) => {
  //handle logic
  const { id } = req.params;

  const { content, like, dislike } = req.body;
  //đi tìm question indexOf

  const indexQuestion = listQuestion.findIndex((quest) => quest.id == id);

  if (indexQuestion != -1) {
    // tạo ra  1 object đã sửa để cập nhật
    const updateQuestion = {
      id,
      content,
      like,
      dislike,
    };
    listQuestion[indexQuestion] = updateQuestion;
    fs.writeFileSync(pathQuestions, JSON.stringify(listQuestion), "utf-8");
    res.status(203).json({
      message: "cập nhật thành công",
      data: updateQuestion,
    });
  } else {
    res.status(400).json({
      message: "BAD_REQUEST",
    });
  }
});

// delete (xoá)
app.delete("/api/v1/questions/:id", isCheckExist, (req, res) => {
  const { id } = req.params;
  const newListQuestion = listQuestion.filter((quest) => quest.id != id);
  fs.writeFileSync(pathQuestions, JSON.stringify(newListQuestion), "utf-8");
  res.status(200).json({
    message: "xoá thành công",
  });
});

// running
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
