import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    axios.post('http://localhost:5000/admin/register', { username, password })
      .then(() => {
        alert('Admin registered. Please login.');
        navigate('/login');
      })
      .catch(err => {
        alert(err.response?.data?.error || 'Registration failed');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register as Admin</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
