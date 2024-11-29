const Question = require("../models/question");
const Answer = require("../models/answer");

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
    const questions = await Question.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "authorDetails",
        },
      },
      {
        $unwind: "$authorDetails",
      },
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "questionId",
          as: "answers",
        },
      },
      {
        $project: {
          questionText: 1,
          "authorDetails.username": 1,
          likes: 1,
          dislikes: 1,
          createdAt: 1,
          answerCount: { $size: "$answers" },
        },
      },
    ]);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

module.exports = {
  addQuestion,
  getAllQuestions,
};
