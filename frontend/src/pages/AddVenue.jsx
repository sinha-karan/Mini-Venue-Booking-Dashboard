import { useState } from 'react';
import axios from 'axios';
import './styles/AddVenue.css';

function AddVenue() {
  const [form, setForm] = useState({
    name: '',
    location: '',
    price: '',
    capacity: '',
    ownerName: ''
  });

  const handleSubmit = () => {
    axios.post('http://localhost:5000/venues', form)
      .then(() => alert("Venue added"))
      .catch(err => alert("Failed to add venue"));
  };

  return (
    <div className="addvenue-container">
      <h2 className="addvenue-title">Add New Venue</h2>
      {Object.keys(form).map((field) => (
        <input
          key={field}
          className="addvenue-input"
          placeholder={field}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
        />
      ))}
      <button onClick={handleSubmit} className="addvenue-btn">Submit</button>
    </div>
  );
}

export default AddVenue;
