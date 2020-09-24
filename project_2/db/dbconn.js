//-------------------
//DEPENDENCIES
//-------------------
const mongoose = require('mongoose');
require('dotenv').config();
const { MONGODB_URI, DB_NAME } = process.env;

//Config Object
const dbconfig = { useUnifiedTopology: true, useNewUrlParser: true};

//DataBase Connection
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, dbconfig);

//----------------------
//DATABASE EVENTS
//----------------------
const db = mongoose.connection;
db.on('open', () => {
    console.log(`Yerp' Connected to Mongo!`);
})
  .on('close', () => {
    console.log(`Mongo is closed for business`);
  })
  .on('errot', (error) => {
    console.log(error);
  });

//Export Connection
module.exports = mongoose;