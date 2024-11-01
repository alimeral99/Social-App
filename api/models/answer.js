const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  answerText: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
