const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  avtor: String,
  genry: {
    type: mongoose.Schema.ObjectId,
    ref: "Genry"
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;