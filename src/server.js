const express = require("express");
const app = express();

//router(duong dan)
app.get("/api/v1/questions", (req, res) => {
  //doc question tra ve cho client, dung postman de test
});

app.get("/api/v1/questions/:id", (req, res) => {
  //lay id
  const idQuestion = req.params.id;
  /**
   * 1. doc data questions
   * 2. chuyen ve javascript object
   * 3. lay ra question theo id
   * 4. tra ve (co hay khong => co question => oke nguoc lai la khong tim thay)
   */
});

app.post("/api/v1/questions", (req, res) => {
  // lay thong tin tu body
  //  doc data ra
  // ghi vao
  // tra ve la oke
});

app.patch("/api/v1/questions/:id", (req, res) => {
  const idQuestion = req.params.id;
  const newQuestion = req.body;
  /**
   * 1. doc data questions
   * 2. kiem tra xem co ton tai trong question.json hay ko
   * 3. neu co thi update
   * 4. tra ve
   */
});

app.delete("/api/v1/questions/:id", (req, res) => {});

//chay server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server chay tai http://localhost:${PORT}`);
});
