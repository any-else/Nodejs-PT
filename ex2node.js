const fs = require("node:fs");

//đọc theo dạng bất đồng bộ
// bài 2 ý 1
fs.readFile("./txt/read-this.txt", "utf8", (error, data) => {
  if (error) {
    throw new Error(error);
  }
  console.log(data);
});

// bài 2 ý 2
fs.readFile("./txt/append.txt", "utf8", (errorAppend, dataAppend) => {
  if (errorAppend) {
    throw new Error(errorAppend);
  }
  console.log(dataAppend);
  fs.readFile("./txt/input.txt", "utf8", (errorInput, dataInput) => {
    if (errorInput) {
      throw new Error(errorInput);
    }
    console.log(dataInput);
    const finalData = dataAppend + dataInput;
    fs.writeFile("./txt/final.txt", finalData, "utf8", () => {
      console.log("tôi đã ghi file thành công");
    });
  });
});
