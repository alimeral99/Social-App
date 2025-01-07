const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT || 3000;


app.get("/api", (req, res) => {
  res.send("API  working");
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.io = io;
  next();
});

const userRouter = require("./routes/user");
const questionRouter = require("./routes/question");
const answerRouter = require("./routes/answer");

app.use("/auth", userRouter);
app.use("/question", questionRouter);
app.use("/answer", answerRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});
