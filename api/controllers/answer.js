const Answer = require("../models/answer");
const Question = require("../models/question");

const createAnswer = async (req, res) => {
  const { answerText, questionId } = req.body;

  if (!answerText || !questionId) {
    return res.status(400).json("plaese fill all in field");
  }

  try {
    const newAnswer = new Answer({
      answerText: answerText,
      author: req.user._id,
      questionId: questionId,
    });

    await newAnswer.save();

    const question = await Question.findByIdAndUpdate(
      questionId,
      { $inc: { answerCount: 1 } },
      { new: true }
    );

    res.io.emit("update-answer-count", {
      questionId,
      answerCount: question.answerCount,
    });

    const populatedAnswer = await Answer.findById(newAnswer._id).populate(
      "author",
      "username"
    );
    res.status(201).json(populatedAnswer);
  } catch (error) {
    res.status(500).json("Server error");
  }
};

const getAnswer = async (req, res, next) => {
  const { questionId } = req.params;
  const { offset = 0, limit = 2 } = req.query;

  console.log(questionId);
  try {
    const answers = await Answer.find({
      questionId: questionId,
    })
      .skip(offset)
      .limit(limit)
      .populate("author", "username");

    res.status(200).json(answers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAnswer,
  getAnswer,
};
