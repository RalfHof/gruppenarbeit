import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import Home1 from './pages/home1.jsx';
import Smartwatches from './pages/smartwatches.jsx';
import Smartphones from './pages/smartphones.jsx';
import Accessories from './pages/accessories.jsx';
import Product from './pages/product.jsx';
import Error from './pages/error.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Filter from './components/filter.jsx';
import './styles.css';
import './product.css';
import { AuthProvider, useAuth } from './hooks/AuthProvider';

const Main = () => {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/smartwatches" element={<Smartwatches />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const Navigation = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/home1">Home1</Link>
      <Link to="/smartwatches">Smartwatches</Link>
      <Link to="/smartphones">Smartphones</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/product">Product</Link>
      <Link to="/filter">Filter</Link>
      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);





