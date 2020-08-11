const mongoose = require("mongoose");

//schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

//model mongoosa
mongoose.model("Post", postSchema); //prvi argument ucijek veliko slovo a drugi je schema

module.exports = mongoose.model("Post", postSchema);