const express = require("express");
const app = express();
const rootRoute = require("./routers/root.router");
const bodyParser = require("body-parser");
const cors = require("cors");
// middleware global
app.use(bodyParser.json());
app.use(cors());

//router
rootRoute(app);
// host server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
