const mongoose = require('mongoose');


// Connect to the Mongo DB
const mongoDBconnection = mongoose.connect("mongodb://localhost/news", {
   useNewUrlParser: true, 
   useUnifiedTopology: true // !!!! => I added this https://www.npmjs.com/package/mongoose
  });

  // display a message if the mongodb connection is succesful 
  console.log(" + Mongo DB connected successfully => ref: db_connect.js");
  console.log(" + Mongo DB Module imported successfully");
  module.exports = mongoDBconnection;

