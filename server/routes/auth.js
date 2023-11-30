const express = require("express");
const {login} = require("../controllers/auth.js");
const {register} = require("../controllers/auth.js");
const {edit} = require("../controllers/auth.js")
const verifyToken = require("../middleware/auth.js");

const router = express.Router();

router.post("/login",login);
router.post("/register",register);
router.post("/edit",edit)

module.exports = router;