const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  capacity: Number,
  unavailableDates: [String],
  ownerName: String
});

module.exports = mongoose.model('Venue', VenueSchema);