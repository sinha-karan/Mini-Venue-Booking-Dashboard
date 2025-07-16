import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/venues')
      .then(res => setVenues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Venues</h1>
      {venues.map(venue => (
        <div key={venue._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{venue.name}</h3>
          <p>{venue.location}</p>
          <p>₹{venue.price} | Capacity: {venue.capacity}</p>
          <Link to={`/book/${venue._id}`}>Book Venue</Link> | 
          <Link to={`/owner/manage/${venue._id}`}> Manage</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
