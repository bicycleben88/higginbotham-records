const { Schema, model } = require("mongoose");

//Create Schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true }
});

//Create Model
const User = model('user', userSchema);