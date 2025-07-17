const express = require('express');
const router = express.Router();
const Venue = require('../models/venue');


router.get('/', async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
});

router.post('/', async (req, res) => {
  const venue = new Venue(req.body);
  await venue.save();
  res.json({ message: 'Venue added' });
});

router.put('/:id/block', async (req, res) => {
  let { dates } = req.body;

  if (!Array.isArray(dates)) {
    return res.status(400).json({ error: 'Dates must be an array' });
  }

  dates = dates.map(date => date.replace(/\s+/g, ''));

  const venue = await Venue.findById(req.params.id);
  if (!venue) {
    return res.status(404).json({ error: 'Venue not found' });
  }

  const newDates = dates.filter(d => !venue.unavailableDates.includes(d));
  venue.unavailableDates.push(...newDates);

  await venue.save();

  res.json({ message: 'Dates blocked', unavailableDates: venue.unavailableDates });
});

router.put('/:id/unblock', async (req, res) => {
  let { dates } = req.body;

  if (!Array.isArray(dates)) {
    return res.status(400).json({ error: 'Dates must be an array' });
  }

  dates = dates.map(date => date.replace(/\s+/g, ''));

  console.log("Dates to unblock:", dates);

  const venue = await Venue.findById(req.params.id);
  if (!venue) return res.status(404).json({ error: 'Venue not found' });

  console.log("Before:", venue.unavailableDates);

  venue.unavailableDates = venue.unavailableDates.filter(dbDate => {
    const cleanDbDate = dbDate.replace(/\s+/g, '');
    return !dates.includes(cleanDbDate);
  });

  console.log("After:", venue.unavailableDates);

  await venue.save();
  res.json({ message: 'Dates unblocked' });
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const venue = await Venue.findById(id);
    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }
    res.json(venue);
  } catch (err) {
    console.error("Error in GET /venues/:id:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
