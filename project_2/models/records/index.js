const { Schema, model } = require("mongoose");

//Create Schema
const recordSchema = new Schema({
    username: { type: String, required: true },
    albumArtwork: String,
    artist: String,
    genre: String,
    releaseDate: String
});

//Create Model
const User = model('record', recordSchema);