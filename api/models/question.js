const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  author: {
    type: String,
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

questionSchema.virtual("answers", {
  ref: "Answer",
  localField: "_id",
  foreignField: "questionId",
  justOne: false,
});

questionSchema.set("toObject", { virtuals: true });
questionSchema.set("toJSON", { virtuals: true });

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
