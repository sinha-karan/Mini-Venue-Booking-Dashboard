const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Register admin
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await Admin.findOne({ username });
    if (existing) return res.status(400).json({ error: 'Username already exists' });

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login admin
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
