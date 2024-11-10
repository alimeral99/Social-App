const express = require("express");
const { createAnswer } = require("../controllers/answer");

const router = express.Router();

router.post("/create", createAnswer);

module.exports = router;
