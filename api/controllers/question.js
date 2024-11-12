const Question = require("../models/question");
const { v4: uuidv4 } = require("uuid");

const addQuestion = async (req, res) => {
  const { question } = req.body;

  try {
    const newQuestion = new Question({
      questionText: question,
      author: uuidv4(),
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate({
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
