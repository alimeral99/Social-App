const express = require("express");
const { createAnswer, getAnswer } = require("../controllers/answer");
const { authenticateJWT } = require("../utils/AuthMiddleware");

const router = express.Router();

router.post("/create", authenticateJWT, createAnswer);
router.get("/getAnswer/:questionId", getAnswer);

module.exports = router;
