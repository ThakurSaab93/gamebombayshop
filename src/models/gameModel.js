const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  date: String,
  faridabad: String,
  ghaziabad: String,
  gali: String,
  desawar: String
});

module.exports = mongoose.model('Game', gameSchema);
