const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to server");
});
app.post("/getData", async (req, res) => {
  res.send("Thank you for sending us goood wishes!! ");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
