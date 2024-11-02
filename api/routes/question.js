const express = require("express");
const { addQuestion, getAllQuestions } = require("../controllers/question");

const router = express.Router();

router.post("/add", addQuestion);
router.get("/getAllQuestions", getAllQuestions);

module.exports = router;
