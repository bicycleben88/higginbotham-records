const { urlencoded } = require("express");
const { Schema, model } = require("mongoose");

//Create Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    image: String,
    favoriteAlbum: String, 
    name: String
});

//Create Model
const User = model('user', userSchema);

//Export Model
module.exports = User;