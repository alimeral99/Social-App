const Question = require("../models/question");
const Like = require("../models/likes");

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

const likeQuestion = async (req, res) => {
  const { questionId } = req.params;
  const userId = req.user._id;

  const question = await Question.findById(questionId);

  const likeControl = question.likes.includes(userId);

  if (likeControl) {
    // liked already, so unlike
    question.likeCount = question.likeCount - 1;
    question.likes.remove(userId);
    question.save();

    return res.status(200).json({ likeCount: question.likeCount });
  }

  // like

  question.likeCount = question.likeCount + 1;
  question.likes.push(userId);
  question.save();

  res.status(200).json({
    likeCount: question.likeCount,
    hasLiked: question.likes.includes(userId),
  });
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
          createdAt: 1,
          likeCount: 1,
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
  likeQuestion,
  getAllQuestions,
};
