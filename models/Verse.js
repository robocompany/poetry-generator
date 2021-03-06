const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const verseSchema = new Schema({
  content: String,
  user_id: Schema.Types.ObjectId
});

const Verse = mongoose.model('verse', verseSchema);
module.exports = Verse;
