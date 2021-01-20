// Dependencies
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI, DB_NAME } = process.env;

const dbconfig = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(`${MONGODB_URI}${DB_NAME}`, dbconfig);

const db = mongoose.connection;
db.on("open", () => {
  console.log(`Yerp' Connected to Mongo!`);
})
  .on("close", () => {
    console.log(`Mongo is closed for business`);
  })
  .on("error", (error) => {
    console.log(error);
  });

module.exports = mongoose;
