const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

//Post Mongoose Middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

//CREATING MODEL ---> Listing
const Listing = mongoose.model("Listing", listingSchema);

//EXPORTING (listing.js -----> app.js)
//                        |
//                        ---> index.js)
module.exports = Listing;
