const http = require("node:http");
const url = require("node:url");

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url, true); //để lấy đường dẫn pathname
  if (pathname == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h1 style="color:red">This is HomePage</h1>`);
    response.end();
  } else if (pathname == "/overview") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1 style='color:blue'>This is OverviewPage</h1>");
    response.end();
  } else if (pathname == "/product") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>This is ProductPage</h1> ");
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.write("Không tìm thấy");
    response.end();
  }
});

const PORT = 8006;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
