const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  username: { type: String, required: true },
  userId: String,
  bandId: String,
  title: String,
  body: String,
});

const Review = model("review", reviewSchema);

module.exports = Review;
