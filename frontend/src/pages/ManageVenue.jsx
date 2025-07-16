import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ManageVenue() {
  const { id } = useParams();
  const [blockDate, setBlockDate] = useState('');
  const [unblockDate, setUnblockDate] = useState('');
  const [venue, setVenue] = useState(null);

  useEffect(() => {
  axios.get(`http://localhost:5000/venues/${id}`)
    .then(res => {
      console.log("Fetched venue:", res.data); // Log the response
      setVenue(res.data);
    })
    .catch(err => {
      console.error("Error fetching venue:", err); // Log any error
    });
}, [id]);


  const handleBlock = () => {
    axios.put(`http://localhost:5000/venues/${id}/block`, {
      dates: [blockDate.trim()]
    })
    .then(() => {
      alert("Date blocked!");
      setBlockDate('');
    })
    .catch(err => alert("Blocking failed"));
  };

  const handleUnblock = () => {
    axios.put(`http://localhost:5000/venues/${id}/unblock`, {
      dates: [unblockDate.trim()]
    })
    .then(() => {
      alert("Date unblocked!");
      setUnblockDate('');
    })
    .catch(err => alert("Unblocking failed"));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manage Venue Availability</h2>

      {venue ? (
        <div>
          <h3>{venue.name}</h3>
          <p>{venue.location}</p>
          <p>Blocked Dates: {venue.unavailableDates?.join(', ') || 'None'}</p>

          <div style={{ marginTop: '20px' }}>
            <h4>Block a Date</h4>
            <input
              type="date"
              value={blockDate}
              onChange={e => setBlockDate(e.target.value)}
            />
            <button onClick={handleBlock} style={{ marginLeft: '10px' }}>Block</button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4>Unblock a Date</h4>
            <input
              type="date"
              value={unblockDate}
              onChange={e => setUnblockDate(e.target.value)}
            />
            <button onClick={handleUnblock} style={{ marginLeft: '10px' }}>Unblock</button>
          </div>
        </div>
      ) : (
        <p>Loading venue info...</p>
      )}
    </div>
  );
}

export default ManageVenue;
