const express = require("express");
const cors = require("cors");
const { Ads2Model, Companies2Model } = require("./models/AdsModel");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://cluster0:cluster0@cluster0.47nh2.mongodb.net/Ad?retryWrites=true&w=majority";
mongoose.connect(url);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

const MatchedAdsRouter = require("./routes/MatchedAdsRoute");
app.use("/matchedAds", MatchedAdsRouter);

app.listen(5000, () => {
  console.log("server started");
});
