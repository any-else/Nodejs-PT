const http = require("node:http"); // đây là module http có sẵn của nodejs giúp mình tạo ra server
const url = require("node:url");

// http có thuộc tính createServer dùng để tạo ra server với nodejs
/**
 * createServer là fnc nhận vào 1 call-back function - Trong callback mình nhận vào 2 đối số đó là request và response
 */

/**
 * req: máy client sẽ gửi request lên
 * res: mình dùng để trả về thông tin cho người dùng
 */
const server = http.createServer((req, res) => {
  const { pathname } = url?.parse(req.url, true);

  if (pathname == "/api-user") {
    res.writeHead(200, { "Content-type": "application/json" });
    const dataUser = [
      {
        name: "user1",
        email: "user1@gmail.com",
        address: "abc",
      },
      {
        name: "user2",
        email: "user2@gmail.com",
        address: "abc",
      },
      {
        name: "user3",
        email: "user3@gmail.com",
        address: "abc",
      },
    ];
    res.write(JSON.stringify(dataUser));
    res.end();
  } else {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write(`<h1 style="color:red">Học lập trình Backend Nodejs </h1>`);
    res.end();
  }
});

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server đang chạy ở port http://localhost:${PORT}`);
});
