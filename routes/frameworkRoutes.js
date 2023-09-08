const express = require('express');
const router = express.Router();
const Framework = require('../models/frameworkModel');

// Create a new framework entry
router.post('/frameworks', async (req, res) => {
  try {
    const { name, proficiency } = req.body;
    const framework = new Framework({ name, proficiency });
    await framework.save();
    res.status(201).json(framework);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all framework entries
router.get('/frameworks', async (req, res) => {
  try {
    const frameworks = await Framework.find();
    res.status(200).json(frameworks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a framework entry by ID
router.put('/frameworks/:id', async (req, res) => {
  try {
    const { name, proficiency } = req.body;
    const framework = await Framework.findByIdAndUpdate(
      req.params.id,
      { name, proficiency },
      { new: true }
    );
    res.status(200).json(framework);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a framework entry by ID
router.delete('/frameworks/:id', async (req, res) => {
  try {
    await Framework.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
