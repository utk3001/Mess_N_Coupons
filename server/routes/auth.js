const express = require("express");
const {login} = require("../controllers/auth.js");
const {register} = require("../controllers/auth.js");

const router = express.Router();

router.post("/login", login);
router.post("/register",register);

module.exports = router;