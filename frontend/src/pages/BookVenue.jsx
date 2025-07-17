import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/BookVenue.css';

function BookVenue() {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [venue, setVenue] = useState(null);
  
  useEffect(() => {
    axios.get(`http://localhost:5000/venues/${id}`)
      .then(res => setVenue(res.data))
      .catch(err => console.error("Failed to fetch venue:", err));
  }, [id]);

  const handleBooking = () => {
    axios.post('http://localhost:5000/bookings', {
      venueId: id,
      userName,
      bookingDate
    })
      .then(() => alert("Booking successful"))
      .catch(err => alert("Booking failed: " + (err.response?.data?.error || err.message)));
  };

  return (
    <div className="book-venue-container">
      <h2>Book Venue</h2>

      <input placeholder="Your Name" onChange={e => setUserName(e.target.value)} />
      <input type="date" onChange={e => setBookingDate(e.target.value)} />
      <button onClick={handleBooking}>Book</button>

      {venue && (
        <>
          <h4 style={{ marginTop: '25px' }}>Unavailable Dates:</h4>
          {venue.unavailableDates.length > 0 ? (
            <ul>
              {venue.unavailableDates.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          ) : (
            <p>All dates are currently available.</p>
          )}
        </>
      )}
    </div>
  );
}

export default BookVenue;
