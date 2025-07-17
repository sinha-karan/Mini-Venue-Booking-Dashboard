import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/Home.css';

function Home() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/venues')
      .then(res => setVenues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">All Venues</h1>
      <div className="venue-grid">
        {venues.map(venue => (
          <div key={venue._id} className="venue-card">
            <h3>{venue.name}</h3>
            <p>{venue.location}</p>
            <p>₹{venue.price} | Capacity: {venue.capacity}</p>
            <div className="venue-actions">
              <Link to={`/book/${venue._id}`} className="venue-btn">Book Venue</Link>
              <Link to={`/owner/manage/${venue._id}`} className="venue-btn manage-btn">Manage</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
