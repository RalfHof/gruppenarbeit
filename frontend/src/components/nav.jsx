import React from 'react';
import { useAuth } from '../hooks/AuthProvider';


const Navbar = () => {
  const { currentUser, handleLogout } = useAuth();

  return (
    <nav>
      <h1>Shop</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/home1">Home1</a></li>
        <li><a href="/smartwatches">Smartwatches</a></li>
        <li><a href="/smartphones">Smartphones</a></li>
        <li><a href="/accessories">Accessories</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/warenkorb">Warenkorb</a></li>
        {!currentUser ? (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </>
        ) : (
          <>
            <li>Eingelogt, {currentUser.username}</li>
            <li><button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#f8f8f9', cursor: 'pointer' }}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;