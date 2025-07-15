const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA
const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    set: () =>
      v === ""
        ? "https://unsplash.com/photos/a-modern-home-office-with-framed-art-and-an-aquarium-yYEiSC3opvM"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

//CREATING MODEL ---> Listing
const Listing = mongoose.model("Listing", listingSchema);

//EXPORTING (listing.js ---> app.js)
module.exports = Listing;
