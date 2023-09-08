const mongoose = require('mongoose');

const ctfAchievementSchema = new mongoose.Schema({
  name: String,
  position: String,
});

module.exports = mongoose.model('CtfAchievement', ctfAchievementSchema);
