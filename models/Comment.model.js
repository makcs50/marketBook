const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  name: String,
  book: {
    type: mongoose.Schema.ObjectId,
    ref: "Book"
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;