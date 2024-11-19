const express = require("express");
const { addQuestion, getAllQuestions } = require("../controllers/question");
const { authenticateJWT } = require("../utils/AuthMiddleware");

const router = express.Router();
router.post("/add", authenticateJWT, addQuestion);
router.get("/getAllQuestions", getAllQuestions);

module.exports = router;
