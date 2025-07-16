import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVenue from './pages/AddVenue';
import BookVenue from './pages/BookVenue';
import ManageVenue from './pages/ManageVenue';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookVenue />} />
        <Route path="/login" element={<Login />} />

        <Route path="/owner/add" element={
          <PrivateRoute>
            <AddVenue />
          </PrivateRoute>
        } />
        <Route path="/owner/manage/:id" element={
          <PrivateRoute>
            <ManageVenue />
          </PrivateRoute>
        } />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
