import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ManageVenue.css';

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
    <div className="manage-container">
      <h2 className="manage-title">Manage Venue Availability</h2>
      {venue ? (
        <div>
          <div className="venue-details">
            <h3>{venue.name}</h3>
            <p>{venue.location}</p>
          </div>

          <h4>Unavailable Dates:</h4>
          <ul className="date-list">
            {venue.unavailableDates.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <input
            className="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="button-group">
            <button onClick={blockDate}>Block Date</button>
            <button onClick={unblockDate}>Unblock Date</button>
          </div>
        </div>
      ) : (
        <p>Loading venue info...</p>
      )}
    </div>
  );
}

export default ManageVenue;
