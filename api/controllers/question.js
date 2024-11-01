const Question = require("../models/question");

const addQuestion = async (req, res) => {
  const { questionText, author } = req.body;

  try {
    const newQuestion = new Question({
      questionText,
      author,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  addQuestion,
};
