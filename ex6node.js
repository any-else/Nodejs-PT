const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true); // lấy đường dẫn ra
  const data = fs.readFileSync("./dev-data/data.json", "utf-8");
  const dataObj = JSON.parse(data);
  console.log({ pathname });
  if (pathname == "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(dataObj));
    res.end;
  } else if (pathname.split("/").length == 3) {
    const id = pathname.split("/")[2];
    const dataById = dataObj.find((dt) => dt.id == id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(dataById));
    res.end();
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
