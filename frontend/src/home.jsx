
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
import React from 'react';

const Home = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="filter-box">
          <FilterButton />
        </div>
      </div>
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
);

export default Home;
