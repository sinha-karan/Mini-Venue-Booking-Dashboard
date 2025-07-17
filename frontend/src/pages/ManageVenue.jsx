import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ManageVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/venues/${id}`)
      .then((res) => setVenue(res.data))
      .catch((err) => console.error("Error fetching venue:", err));
  }, [id]);

  const blockDate = () => {
    axios.put(`http://localhost:5000/venues/${id}/block`, { dates: [date] })
      .then(res => {
        alert("Date blocked");
        setVenue(prev => ({
          ...prev,
          unavailableDates: [...prev.unavailableDates, date]
        }));
        setDate("");
      })
      .catch(err => alert("Block failed"));
  };

  const unblockDate = () => {
    axios.put(`http://localhost:5000/venues/${id}/unblock`, { dates: [date] })
      .then(res => {
        alert("Date unblocked");
        setVenue(prev => ({
          ...prev,
          unavailableDates: prev.unavailableDates.filter(d => d !== date)
        }));
        setDate("");
      })
      .catch(err => alert("Unblock failed"));
  };

  return (
    <div>
      <h2>Manage Venue Availability</h2>
      {venue ? (
        <div>
          <h3>{venue.name}</h3>
          <p>{venue.location}</p>

          <h4>Unavailable Dates:</h4>
          <ul>
            {venue.unavailableDates.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={blockDate}>Block Date</button>
          <button onClick={unblockDate}>Unblock Date</button>
        </div>
      ) : (
        <p>Loading venue info...</p>
      )}
    </div>
  );
}

export default ManageVenue;
