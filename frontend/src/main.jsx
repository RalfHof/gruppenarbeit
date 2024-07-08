import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Home1 from './pages/home1.jsx'; 
import Smartwatches from './pages/smartwatches.jsx';
import Smartphones from './pages/smartphones.jsx';
import Accessories from './pages/accessories.jsx';
import Product from './pages/product.jsx';
import './styles.css';
import './product.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home1" element={<Home1 />} />
      <Route path="/smartwatches" element={<Smartwatches />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/product" element={<Product />} />          
    </Routes>
  </Router>
);
