import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookVenue() {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleBooking = () => {
    axios.post('http://localhost:5000/bookings', {
      venueId: id,
      userName,
      bookingDate
    })
    .then(() => alert("Booking successful"))
    .catch(err => alert("Booking failed: " + err.response?.data?.error || err.message));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book Venue</h2>
      <input placeholder="Your Name" onChange={e => setUserName(e.target.value)} />
      <input type="date" onChange={e => setBookingDate(e.target.value)} />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
}

export default BookVenue;
