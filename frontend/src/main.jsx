
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from './pages/home.jsx';
import Smartwatches from './pages/smartwatches.jsx';
//import Smartphones from './pages/smartphones.jsx'


//import Smartphones from "./pages/smartphones";
//import './smartwaches.css';

//const App = () => {
//  return (
//    <div>
//      <Navbar />
//      <div className="main-content">
//        <FilterButton />
//        <ProductGrid />
//      </div>
//      <Footer />
//    </div>
 // );
//};

//const Navbar = () => (
//  <nav className="navbar">
//    <a href="#shop" className="nav-link">Shop</a>
//    <div className="nav-center">
//      <a href="#home" className="nav-link">Home</a>
//      <a href="#smartphones" className="nav-link">Smartphones</a>
//      <a href="#smartwatches" className="nav-link">Smartwatches</a>
//    </div>
//    <a href="#cart" className="nav-link">Warenkorb</a>
//  </nav>
//);

//const FilterButton = () => (
//  <button className="filter-button">Filter</button>
//);

//const products = [
//  { id: 1, name: "Product 1", description: "Description 1", price: "€1100" },
//  { id: 2, name: "Product 2", description: "Description 2", price: "€2000" },
//  { id: 4, name: "Product 4", description: "Description 4", price: "€400" },
//  { id: 5, name: "Product 5", description: "Description 5", price: "€1500" },
//];

//const ProductGrid = () => (
  /*{ <div className="product-grid">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>} */
///);

/* const App = () => {
  return (
    <div className="app-container">
      <FilterButton />
      <ProductList />
    </div>
  );
};

const FilterButton = () => (
  <button className="filter-button">Filter</button>
);

const products = [
  { id: 1, name: "Product 1", description: "Description 1", price: "€100" },
  { id: 2, name: "Product 2", description: "Description 2", price: "€200" },
  { id: 3, name: "Product 3", description: "Description 3", price: "€300" },
  { id: 4, name: "Product 4", description: "Description 4", price: "€400" },
  { id: 5, name: "Product 5", description: "Description 5", price: "€500" },
];

const ProductList = () => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button className="cart-button">In den Warenkorb</button>
  </div>
); */


/* const Error = () => (
  <div>404 Not Found</div>
);
 */


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/smartwatches" element={<Smartwatches />} />
       {/* { <Route path="/smartphones" element={<Smartphones />} />
       } */}
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);