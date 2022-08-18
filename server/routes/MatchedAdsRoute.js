const express = require("express");
const getMatchedAdsController = require("../controller/MatchedAdsController");
const router = express.Router();

router.get("/", getMatchedAdsController);

module.exports = router;
