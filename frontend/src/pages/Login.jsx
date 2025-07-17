import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:5000/admin/login', { username, password })
      .then(() => {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/owner/add');
      })
      .catch(err => {
        alert(err.response?.data?.error || 'Login failed');
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <input
        className="login-input"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
