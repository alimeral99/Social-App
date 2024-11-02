const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.get("/api", (req, res) => {
  res.send("API  working");
});

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/user");
const questionRouter = require("./routes/question");

app.use("/user", userRouter);
app.use("/question", questionRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});
