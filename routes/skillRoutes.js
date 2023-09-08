const express = require('express');
const router = express.Router();
const Skill = require('../models/skillModel');

// Create a new skill
router.post('/skills', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a skill by ID
router.put('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(skill);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a skill by ID
router.delete('/skills/:id', async (req, res) => {
  try {
    await Skill.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
