const express = require("express");
const { required } = require("joi");
const { Schema, Types, plugin, default: mongoose } = require("mongoose");
const app = express();
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
