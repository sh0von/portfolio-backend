const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: String,
  proficiency: String,
});

module.exports = mongoose.model('Language', languageSchema);
