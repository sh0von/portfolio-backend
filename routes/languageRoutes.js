const express = require('express');
const router = express.Router();
const Language = require('../models/languageModel');

// Create a new language
router.post('/languages', async (req, res) => {
  try {
    const language = new Language(req.body);
    await language.save();
    res.status(201).json(language);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all languages
router.get('/languages', async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a language by ID
router.put('/languages/:id', async (req, res) => {
  try {
    const language = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(language);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a language by ID
router.delete('/languages/:id', async (req, res) => {
  try {
    await Language.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
