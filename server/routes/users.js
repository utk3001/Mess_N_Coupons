const express = require("express");
const getUser = require("../controllers/users.js");
const verifyToken = require("../middleware/auth.js");

const router = express.Router();

router.get("/:id", verifyToken, getUser)

module.exports = router;