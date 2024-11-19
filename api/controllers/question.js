const Question = require("../models/question");

const addQuestion = async (req, res) => {
  const { questionData } = req.body;

  try {
    const newQuestion = new Question({
      questionText: questionData,
      author: req.user._id,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate("author", "username")
      .populate({
        path: "answers",
        populate: { path: "author", select: "username" },
      });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json("Server Erro");
  }
};

module.exports = {
  addQuestion,
  getAllQuestions,
};
