const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const url = "<url>";
mongoose.connect(url);

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

const MatchedAdsRouter = require("./routes/MatchedAdsRoute");
app.use("/matchedAds", MatchedAdsRouter);

app.listen(5000, () => {
  console.log("server started");
});
