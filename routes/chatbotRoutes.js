const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");
const { processQuery } = require("../controllers/chatbotController");

router.post("/query", chatbotController.processQuery);

module.exports = router;
