const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel');

// Create a new project
router.post('/projects', async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const project = new Project({ title, description, link, image });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a project by ID
router.put('/projects/:id', async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, link, image },
      { new: true }
    );
    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a project by ID
router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
