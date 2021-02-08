const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  url: String,
  channel: String,
  sound: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

module.exports = mongoose.model("Posts", postSchema);
