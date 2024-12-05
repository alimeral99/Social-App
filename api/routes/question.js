const express = require("express");
const {
  addQuestion,
  likeQuestion,
  getAllQuestions,
} = require("../controllers/question");
const { authenticateJWT } = require("../utils/AuthMiddleware");

const router = express.Router();
router.post("/add", authenticateJWT, addQuestion);
router.put("/likes/:questionId", authenticateJWT, likeQuestion);
router.get("/getAllQuestions", getAllQuestions);

module.exports = router;
