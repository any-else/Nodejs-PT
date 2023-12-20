const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routers/index.router");
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // có hoặc không có cũng được
//database
// Router
rootRoute(app);
// Run Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
