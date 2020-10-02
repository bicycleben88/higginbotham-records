const { Schema, model } = require("mongoose");

//Create Schema
const reviewSchema = new Schema({
    username: { type: String, required: true },
    userId: String,
    bandId: String,
    title: String, 
    body: String
});

//Create Model
const Review = model('review', reviewSchema);

//Export Model
module.exports = Review;