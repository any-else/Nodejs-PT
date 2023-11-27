const http = require("node:http");
const url = require("node:url");
const queryString = require("querystring");

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);
  console.log("pathname", pathname);
  console.log("query", query);
  if (request.method == "GET" && pathname == "/") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(
      JSON.stringify({
        product: [
          {
            name: "quần jearn",
            price: 200,
          },
          {
            name: "áp crouton",
            price: 200,
          },
        ],
      })
    );
    response.end();
  } else if (request.method == "POST" && pathname == "/signup") {
    // handle thông tin đăng ký
    // dùng request.on để lấy ra data từ client nhưng dành cho nodejs
    // biến đổi data trả về cho phía client có dạng
    /**
     *  {
     *     message: "tạo mới thành công",
     *     data: {
                  username: " ",
                  email: "",
              }
     *  }
     */

    let body = "";
    // luồng 1
    request.on("error", (error) => {
      console.log(" lỗi rồi ", error);
    });
    // luồng 2
    request.on("data", (chunk) => {
      return (body = body + chunk.toString());
    });
    // luồng 3
    request.on("end", () => {
      console.log("body", body);
      //biến đổi đoạn chuỗi username=bui+van+vu&email=vu%40gmail.com&password=123456 => {  }

      // hai cách xử lý dùng thư viện querystring. Hoặc js loop để biến về obj
      const data = queryString.parse(body);
      console.log("data", data);
      //sử dụng Destructuring để lấy ra usename, email
      const { username, email, ...rest } = data;

      //trả về cho client
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          message: "tạo thành công",
          user: {
            username,
            email,
          },
        })
      );
      response.end();
    });
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server chạy tại port http://localhost:${PORT}`);
});
