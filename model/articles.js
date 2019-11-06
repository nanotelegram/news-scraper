var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, // Syntax mongoose.model("collectionName", ArticleSchema);
var Article = mongoose.model("articles", ArticleSchema);

// Export the Article model

module.exports = Article;

// IMPORTANT 
// if you dont { "Article": Article};, your route http://localhost:5050/articles will produce "find undefined"
console.log(" + article model connected successfully => ref: articles.js");

