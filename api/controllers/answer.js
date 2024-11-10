const Answer = require("../models/answer");

const createAnswer = async (req, res) => {
  const { answerText, authorId, questionId } = req.body;

  try {
    const newAnswer = new Answer({
      answerText,
      author: authorId,
      questionId: questionId,
    });

    await newAnswer.save();
  } catch (error) {
    res.status(500).json("Server error");
  }
};

module.exports = {
  createAnswer,
};
