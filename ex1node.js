const fs = require("node:fs");

// const readAppend = fs.readFileSync("./txt/append.txt", "utf-8");

// console.log("tôi đang đọc file append", readAppend);

// // tôi muốn ghi vào bên file testwrite là học code khó lắm
// fs.writeFileSync(
//   "./txt/testwrite.txt",
//   "tôi đang học code nhưng mà khó lắm",
//   "utf-8"
// );

// 1

const readReadThis = fs.readFileSync("./txt/read-this.txt", "utf-8");
console.log({ readReadThis });

const readInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log({ readInput });

const readAppend = fs.readFileSync("./txt/append.txt", "utf-8");
console.log({ readAppend });

//3
const finalData = readInput + readAppend;
fs.writeFileSync("./txt/final.txt", finalData, "utf-8");
