import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
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
  { id: 1, name: "Samsung", description: "Description 1", price: "€100" },
  { id: 2, name: "Apple", description: "Description 2", price: "€200" },
  { id: 3, name: "Nokia", description: "Description 3", price: "€300" },
  { id: 4, name: "Huawei", description: "Description 4", price: "€400" },
  { id: 5, name: "GoogleFone", description: "Description 5", price: "€500" },
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


