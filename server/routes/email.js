const express = require("express");
const {sendEmail} = require("../controllers/email.js");

const router = express.Router();

router.post("/send",sendEmail);

module.exports = router;