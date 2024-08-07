const express = require("express");
const router = express.Router();

const Experiences=require("../controllers/experience-controller")

router.route("/experince").get(Experiences);

module.exports = router;