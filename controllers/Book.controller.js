const Book = require('../models/Book.model');
module.exports.bookController = {
    getBook: (req, res) => {
      Book.find({}).then(
        (data) => res.json(data))
    },
    getBookFromGenry: (req, res) => {
      Book.find({}).populate('genry').then(
        (data) => res.json(data))
    },
    getBookId: (req, res) => {
        Book.findOne({_id: req.params.id}).then(
          (data) => res.json(data))
      },

    deleteBook: (req, res) => {
      Book.findOneAndRemove(req.params.id).then(
      (data) => res.json(data))
      },
      
    editBook: (req, res) => {
      Book.findByIdAndUpdate(req.params.id, {name: req.body.name}).then(
        (data) => res.json(data))
      },

    createBook: (req, res) => {
      const { name, avtor, genry } = req.body;
      console.log(req.body)
      Book.create({
        name,
        avtor,
        genry,
      }).then(() => {
        res.json("Book добавленa")
      })
      }
    }