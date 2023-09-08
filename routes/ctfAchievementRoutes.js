const express = require('express');
const router = express.Router();
const CtfAchievement = require('../models/ctfAchievementModel');

// Create a new CTF achievement
router.post('/ctf-achievements', async (req, res) => {
  try {
    const { name, position } = req.body;
    const ctfAchievement = new CtfAchievement({ name, position });
    await ctfAchievement.save();
    res.status(201).json(ctfAchievement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all CTF achievements
router.get('/ctf-achievements', async (req, res) => {
  try {
    const ctfAchievements = await CtfAchievement.find();
    res.status(200).json(ctfAchievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a CTF achievement by ID
router.put('/ctf-achievements/:id', async (req, res) => {
  try {
    const { name, position } = req.body;
    const ctfAchievement = await CtfAchievement.findByIdAndUpdate(
      req.params.id,
      { name, position },
      { new: true }
    );
    res.status(200).json(ctfAchievement);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a CTF achievement by ID
router.delete('/ctf-achievements/:id', async (req, res) => {
  try {
    await CtfAchievement.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
