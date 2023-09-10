const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
const PORT = 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

const MatchedAdsRouter = require("./routes/MatchedAdsRoute");
app.use("/matchedAds", MatchedAdsRouter);

app.listen(PORT, () => {
  console.log("server started");
});
