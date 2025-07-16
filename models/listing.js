const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SCHEMA
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    //did updation according to our data.js file
    filename: String,
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/a-modern-home-office-with-framed-art-and-an-aquarium-yYEiSC3opvM",
    },
  },
  price: Number,
  location: String,
  country: String,
});

//CREATING MODEL ---> Listing
const Listing = mongoose.model("Listing", listingSchema);

//EXPORTING (listing.js -----> app.js)
//                        |
//                        ---> index.js)
module.exports = Listing;
