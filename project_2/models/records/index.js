const { Schema, model } = require("mongoose");

const recordSchema = new Schema({
  username: { type: String, required: true },
  albumArtwork: String,
  albumTitle: String,
  artist: String,
  genre: String,
  releaseDate: String,
});

const Record = model("record", recordSchema);

module.exports = Record;
