const mongoose = require("mongoose");

const genrySchema = mongoose.Schema({
  name: String
});

const Genry = mongoose.model('Genry', genrySchema);

module.exports = Genry;