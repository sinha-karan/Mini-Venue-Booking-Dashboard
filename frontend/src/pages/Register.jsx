import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';

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
    <div className="register-container">
      <h2 className="register-title">Register as Admin</h2>
      <input
        className="register-input"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="register-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="register-btn" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
