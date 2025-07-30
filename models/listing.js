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
        "https://images.unsplash.com/photo-1742198832597-e43588e8ad28?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
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
