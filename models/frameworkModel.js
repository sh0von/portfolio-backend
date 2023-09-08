const mongoose = require('mongoose');

const frameworkSchema = new mongoose.Schema({
  name: String,
  proficiency: String,
});

module.exports = mongoose.model('Framework', frameworkSchema);
