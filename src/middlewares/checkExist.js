const path = require("path");
const fs = require("fs");

const checkExist = (req, res, next) => {
  //handle middleware
  /**
   * bước 1: đọc data ra
   * bước 2: kiểm tra data
   * bước 3: trả về
   */
  const pathQuestions = path.join(__dirname, "../../data/questions.json");
  const dataQuestionJson = fs.readFileSync(pathQuestions, "utf-8");
  const listQuestion = JSON.parse(dataQuestionJson);

  const { id } = req.params;
  const { body } = req.body;
  /**
   * if(id có nhưng body không có)
   * else if( id không có và body lại có)
   * else if(cả đồng thời có )
   */
  if (id && !body) {
    const questionById = listQuestion.some((quest) => quest.id == id);
    if (questionById) {
      next();
    } else {
      res.status(400).json({
        message: "BAD_REQUEST",
      });
    }
  } else if (!id && body) {
    const checkContent = listQuestion.some(
      (quest) => quest.content == body.content
    );
    if (checkContent) {
      res.status(400).json({
        message: "content đã tồn tại",
      });
    } else {
      next();
    }
  }
};

module.exports = checkExist;
