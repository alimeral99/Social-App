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

    res.io.emit("update-like-count", {
      questionId,
      likeCount: question.likeCount,
    });

    return res.send();
  }

  // like

  question.likeCount = question.likeCount + 1;
  question.likes.push(userId);
  question.save();

  res.io.emit("update-like-count", {
    questionId,
    likeCount: question.likeCount,
  });

  res.status(200).json({
    hasLiked: question.likes.includes(userId),
  });
};

const categoryKeywords = {
  technology: ["programming", "javascript", "software", "technology"],
  health: ["medicine", "health", "mental health", "exercise", "therapy"],
  science: ["nature", "research", "physics", "biology", "chemistry"],
  cooking: ["pizza", "coffee", "hamburger", "cook", "dessert"],
  business: ["startup", "entrepreneurship", "marketing", "finance"],
};

const searchQuestionsByCategory = async (req, res) => {
  const { category } = req.query;

  const keywords = categoryKeywords[category];

  if (!keywords) {
    return res.status(400).json({ message: "Invalid category" });
  }

  try {
    const questions = await Question.find({
      $or: keywords.map((keyword) => ({
        questionText: { $regex: keyword, $options: "i" },
      })),
    }).populate("author", "username");

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

const getMostAnsweredQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate("author", "username")
      .sort({ answerCount: -1 })
      .limit(10); // İlk 10 sonucu getir
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch most answered questions" });
  }
};

const fetchTopQuestions = async (req, res) => {
  const { type } = req.query;

  console.log(type);

  if (!type || !["liked", "answered", "newest"].includes(type)) {
    return res
      .status(400)
      .send('Invalid query parameter. Use "liked", "answered", or "newest".');
  }

  try {
    let sortField;
    if (type === "liked") {
      sortField = "likeCount";
    } else if (type === "answered") {
      sortField = "answerCount";
    } else if (type === "newest") {
      sortField = "createdAt";
    }

    const questions = await Question.find()
      .sort({ [sortField]: type === "newest" ? -1 : 1 })
      .limit(10)
      .populate("author", "username");
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch most liked questions" });
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
          as: "author",
        },
      },
      {
        $unwind: "$author",
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
          "author.username": 1,
          createdAt: 1,
          likeCount: 1,
          answerCount: 1,
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
  fetchTopQuestions,
  searchQuestionsByCategory,
};
