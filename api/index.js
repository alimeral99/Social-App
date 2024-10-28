const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.get("/api", (req, res) => {
  res.send("API  working");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});
