const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("welcome to server webscape team 2 server");
});
app.get("/getData", async (req, res) => {
  res.send("Thank you for sending us goood wishes!! ");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
