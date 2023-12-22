const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routers/index.router");
const cors = require("cors");
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // có hoặc không có cũng được
//chia sẻ tài nguyên giữa react và express
app.use(cors());
//database
// Router
rootRoute(app);
// Run Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
