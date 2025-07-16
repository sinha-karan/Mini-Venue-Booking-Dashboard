import { useState } from 'react';
import axios from 'axios';

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
    <div style={{ padding: '20px' }}>
      <h2>Add New Venue</h2>
      {Object.keys(form).map((field) => (
        <input
          key={field}
          placeholder={field}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          style={{ display: 'block', marginBottom: '10px' }}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddVenue;
