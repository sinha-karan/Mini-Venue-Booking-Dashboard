import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      background: '#222', 
      color: 'white',
      padding: '10px'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}> All Venues </Link>
      <Link to="/owner/add" style={{ color: 'white', textDecoration: 'none' }}> Add Venue </Link>
      <Link to="/owner/manage/ENTER_ID" style={{ color: 'white', textDecoration: 'none' }}>   Manage Venue (ID)</Link>
      <Link onClick={() => {localStorage.removeItem('isLoggedIn');
        window.location.href = '/login';}} style={{ color: 'white', cursor: 'pointer' }}>  Logout  
      </Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>


    </nav>
  );
};

export default Navbar;
