const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
