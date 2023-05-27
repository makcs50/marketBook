const Comment = require('../models/Comment.model');

module.exports.commentController = {
    getComment: (req, res) => {
      Comment.find({}).populate('book').then(
        (data) => res.json(data))
    },

    deleteComment: (req, res) => {
        Comment.findOneAndRemove(req.params.id).then(
        (data) => res.json(data))
        },

    createComment: (req, res) => {
            const { name, text, book } = req.body;
            console.log(req.body)
            Comment.create({
              name,
              text,
              book,
            }).then(() => {
              res.json("comment добавлен")
            })
     }
    }