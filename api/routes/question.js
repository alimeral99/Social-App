const express = require("express");
const {
  addQuestion,
  likeQuestion,
  getAllQuestions,
  fetchTopQuestions,
  searchQuestionsByCategory,
} = require("../controllers/question");
const { authenticateJWT } = require("../utils/AuthMiddleware");

const router = express.Router();
router.post("/add", authenticateJWT, addQuestion);
router.get("/most", fetchTopQuestions);

router.put("/likes/:questionId", authenticateJWT, likeQuestion);
router.get("/search", searchQuestionsByCategory);
router.get("/getAllQuestions", getAllQuestions);

module.exports = router;
