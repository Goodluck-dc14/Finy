const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const bankStatementController = require("../controllers/bankStatementController");
const {
  uploadBankStatement,
} = require("../controllers/bankStatementController");

router.route("/uploading").post(upload.single("image"), uploadBankStatement);

module.exports = router;
