const { Ads2Model } = require("../models/AdsModel");

const getMatchedAdsController = async (req, res) => {
  const query = req.query.searchText;
  const data = await Ads2Model.find({}).populate("companyId");
  if (query) {
    const response = data.filter(
      (item) =>
        // checking if the query string is in the following elements
        String(item.primaryText).toLowerCase().includes(query.toLowerCase()) ||
        String(item.headline).toLowerCase().includes(query.toLowerCase()) ||
        String(item.description).toLowerCase().includes(query.toLowerCase()) ||
        String(item.companyId.name)
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        String(item.companyId.url).toLowerCase().includes(query.toLowerCase())
    );
    res.json({ data: response });
  } else if (query === " " || query === "") {
    res.json({ data: [] });
  }
};

module.exports = getMatchedAdsController;
