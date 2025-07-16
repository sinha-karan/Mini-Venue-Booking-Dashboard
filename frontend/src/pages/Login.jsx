import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div style={{ padding: '20px' }}>
      <h2>Admin Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
