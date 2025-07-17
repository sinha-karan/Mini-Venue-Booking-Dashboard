import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">All Venues</Link>
      <Link to="/owner/add">Add Venue</Link>
      <span
        onClick={() => {
          localStorage.removeItem('isLoggedIn');
          window.location.href = '/login';
        }}
        className="logout-link"
      >
        Logout
      </span>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
