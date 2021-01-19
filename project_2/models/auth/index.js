const { urlencoded } = require("express");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: String,
  favoriteAlbum: String,
  name: String,
});

const User = model("user", userSchema);

module.exports = User;
