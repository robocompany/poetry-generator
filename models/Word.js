const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const wordSchema = new Schema({
  content: String,
  type: String,
  user_id: Schema.Types.ObjectId,
});

const Word = mongoose.model('word', wordSchema);
module.exports = Word;
