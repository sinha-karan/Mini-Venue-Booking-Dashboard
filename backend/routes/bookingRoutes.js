const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Venue = require('../models/venue');

router.post('/', async (req, res) => {
  const { venueId, userName, bookingDate } = req.body;

  const venue = await Venue.findById(venueId);
  if (venue.unavailableDates.includes(bookingDate)) {
    return res.status(400).json({ error: 'Date not available' });
  }

  const booking = new Booking({
    venueId,
    userName,
    bookingDate,
    totalPrice: venue.price
  });

  venue.unavailableDates.push(bookingDate);
  await venue.save();
  await booking.save();

  res.json({ message: 'Venue booked' });
});

module.exports = router;
