const mongoose = require("mongoose");
const initData = require("./data.js"); // initData (initialized Data)
const Listing = require("../models/listing.js"); //import listing.js

//Connecting -----> DB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//initializing data
const initDB = async () => {
  await Listing.deleteMany({}); // Deleting Previous data
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68890dcad1bb121bda664ad0",
  }));
  await Listing.insertMany(initData.data); //Initializing new Data
  console.log("Data was initialized");
};

initDB();
