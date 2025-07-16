const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  venueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
  userName: String,
  bookingDate: String,
  totalPrice: Number
});

module.exports = mongoose.model('Booking', BookingSchema);