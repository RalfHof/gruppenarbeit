import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    category: 'all'
  });

  useEffect(() => {
    // Beispielhaftes Laden der Produktdaten
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);
  
  

  useEffect(() => {
    filterProducts();
  }, [filter] );

  const filterProducts = () => {
    let tempProducts = [...products];

    // Suchfilter
    if (filter.search) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    // Kategoriefilter
    if (filter.category !== 'all') {
      tempProducts = tempProducts.filter(
        product => product.category.toLowerCase() === filter.category.toLowerCase()
      );
    }

    setFilteredProducts(tempProducts);
  };

  const handleSearchChange = (e) => {
    setFilter({
      ...filter,
      search: e.target.value
    });
  };

  const handleCategoryChange = (e) => {
    setFilter({
      ...filter,
      category: e.target.value
    });
  };

  return (
    <div>
      <h1>Produktliste</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Suche..."
          value={filter.search}
          onChange={handleSearchChange}
        />
        <select value={filter.category} onChange={handleCategoryChange}>
          <option value="all">Alle Kategorien</option>
          <option value="smartphone">Smartphones</option>
          <option value="smartwatch">Smartwatches</option>
          <option value="accessory">Zubehör</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
