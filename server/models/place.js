const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  caption: String,
  name: String,
  address: String,
  street: String,
  city: String,
  state: String,
  zip: String
});

const Place = mongoose.model("Place", placeSchema);

module.exports = {
  model: Place,
  schema: placeSchema
};
