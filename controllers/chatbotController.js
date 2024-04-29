const GeminiService = require("../services/geminiService");

exports.processQuery = async (req, res) => {
  try {
    const { query } = req.body;

    const response = await GeminiService.generateResponse(query);

    res.json({ response });
  } catch (error) {
    console.error("Error processing chatbot query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
