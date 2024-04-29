const cloudinary = require("../utils/cloudinary");
const BankStatement = require("../models/bankStatement");

exports.uploadBankStatement = async (req, res) => {
  try {
    const { statementData } = req.body;

    if (!statementData) {
      return res.status(400).json({ error: "statementData is required" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ error: "Bank statement image is required" });
    }

    const result = await cloudinary.uploads(req.file.path, "image");

    const bankStatement = new BankStatement({
      image: result.url,
      statementData,
    });

    await bankStatement.save();

    res.status(201).json({ message: "Bank statement uploaded successfully" });
  } catch (error) {
    console.error("Error uploading bank statement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
