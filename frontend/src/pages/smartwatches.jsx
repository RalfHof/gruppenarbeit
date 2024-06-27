import React from 'react';
//import smartwatchData from "./smartwatches.json";

const Smartwatches = () => {
  return (
    <div className="smartwatches-container">
      <div className="top-tiles">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="small-tile">Tile {index + 1}</div>
        ))}
      </div>
      <button className="most-purchased-button">Meist gekaufte Artikel</button>
      <div className="product-grid">
        {smartwatches.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const smartwatches = [
  { id: 1, name: "Smartwatch 1", description: "Beschreibung 1", price: "€250" },
  { id: 2, name: "Smartwatch 2", description: "Beschreibung 2", price: "€250" },
  { id: 3, name: "Smartwatch 3", description: "Beschreibung 3", price: "€350" },
  { id: 4, name: "Smartwatch 4", description: "Beschreibung 4", price: "€450" },
  { id: 5, name: "Smartwatch 5", description: "Beschreibung 5", price: "€550" },
  { id: 6, name: "Smartwatch 6", description: "Beschreibung 6", price: "€650" },
  { id: 7, name: "Smartwatch 7", description: "Beschreibung 7", price: "€750" },
  { id: 8, name: "Smartwatch 8", description: "Beschreibung 8", price: "€850" },
  { id: 9, name: "Smartwatch 9", description: "Beschreibung 9", price: "€950" },
  { id: 10, name: "Smartwatch 10", description: "Beschreibung 10", price: "€1050" },
];



const ProductCard = ({ product }) => (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.manufacturer}</p>
      <p>{product.price} €</p>
      <button className="cart-button">In den Warenkorb</button>
    </div>
  );




export default Smartwatches;


