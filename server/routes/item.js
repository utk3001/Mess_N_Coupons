const express = require("express");
const {add,removeAll} = require("../controllers/item.js");
const {remove} = require("../controllers/item.js");
const {edit} = require("../controllers/item.js")
const {getAll} = require("../controllers/item.js")
const {getOne} = require("../controllers/item.js")

const router = express.Router();

router.post("/add",add);
router.post("/remove",remove);
router.post("/edit",edit)
router.get("/all",getAll)
router.post("/one",getOne)
router.get("/removeAll",removeAll);


module.exports = router;