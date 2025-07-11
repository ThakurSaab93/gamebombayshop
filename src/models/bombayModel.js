const mongoose = require('mongoose');

const createSchema = mongoose.Schema({
  date: String,
  bombay_3pm: String,
  bombay_6pm: String,
  bombay_9pm: String,
  bombay_12am: String,
  bombay_6am: String,
});
module.exports =  mongoose.model('Bombay', createSchema);