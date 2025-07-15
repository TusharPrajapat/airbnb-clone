const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

//Connecting -----> DB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main(params) {
  await mongoose.connect(MONGO_URL);
}

//ROOT
app.get("/", (req, res) => {
  res.send("Welcome to root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",

    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was Saved");
  res.send("Succesful testing");
});

app.listen("8080", (req, res) => {
  console.log("Server is listening to port 8080");
});
