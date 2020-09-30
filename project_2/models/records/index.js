const { Schema, model } = require("mongoose");

//Create Schema
const recordSchema = new Schema({
    username: { type: String, required: true },
    albumArtwork: String,
    albumTitle: String,
    artist: String,
    genre: String,
    releaseDate: String,
});

//Create Model
const Record = model('record', recordSchema);

//Export Model
module.exports = Record;