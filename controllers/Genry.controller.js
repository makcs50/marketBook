const Genry = require('../models/Genry.model');
module.exports.genryController = {
    getGenry: (req, res) => {
      Genry.find({}).then(
        (data) => res.json(data))
    },

    deleteGenry: (req, res) => {
      Genry.findOneAndRemove(req.params.id).then(
      (data) => res.json(data))
      },

    createGenry: (req, res) => {
        const { name } = req.body;
        console.log(req.body)
        Genry.create({ name }).then(() => 
        res.json("Жанр добавлен")
      ).catch((err) => res.json(err)
      )
      }
    }