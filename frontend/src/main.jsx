import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './pages/home.jsx';
import Smartwatches from './pages/smartwatches.jsx';
import Smartphones from './pages/smartphones.jsx';
import Accessories from './pages/accessories.jsx'; 
//import'./smartwatches.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/smartwatches" element={<Smartwatches />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/accessories" element={<Accessories />} /> 
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



