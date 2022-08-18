const mongoose = require("mongoose");

const Companies2Schema = new mongoose.Schema({
  _id: { type: Number, required: true, unique: true },
  name: String,
  url: String,
});
const Ads2Schema = new mongoose.Schema({
  _id: { type: Number, required: true, unique: true },
  companyId: { type: mongoose.Schema.Types.Number, ref: "Company" },
  primaryText: String,
  headline: String,
  description: String,
  cta: String,
  imageUrl: String,
});

const Ads2Model = mongoose.model("Ad", Ads2Schema);
const Companies2Model = mongoose.model("Company", Companies2Schema);

module.exports = { Ads2Model, Companies2Model };
