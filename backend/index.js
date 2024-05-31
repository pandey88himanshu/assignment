const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const userRoute = require("./routes/router");
app.use("/api/v1", userRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(process.env.PORT, () => {
  console.log(`port is running on ${process.env.PORT}`);
});
