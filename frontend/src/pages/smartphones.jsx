import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

// Einzelne Item-Komponente
const Item = ({ item }) => (
  <div className="itemCard">
    <div className="itemContainer">
      <h3 className="itemName">{item.name}</h3>
      <img className="itemImage" src={item.image} alt={item.name} />
    </div>
    <div className="descriptionContainer">
      <p className="itemDescription">{item.description}</p>
      <p className="itemPrice">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(item.price)}
      </p>
      <button className="cart-button">In den Warenkorb</button>
    </div>
  </div>
);

// Filter-Komponente
const Filter = ({ title, options, onFilterChange }) => (
  <div className="filter">
    <p>{title}</p>
    <div className="filter-options">
      {options.map((option, index) => (
        <button key={index} className="filter-button" onClick={() => onFilterChange(option)}>
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Hauptkomponente
const Main = () => {
  const [data, setData] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/smartphones");
        const result = await response.json();
        setData(result);
        setFilteredData(result);

        const uniqueManufacturers = [
          ...new Set(result.map(item => item.manufacturer))
        ];
        setManufacturers(uniqueManufacturers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (type, value) => {
    let filtered = data;
    if (type === "manufacturer") {
      setSelectedManufacturer(value);
      if (value) {
        filtered = filtered.filter(item => item.manufacturer === value);
      }
    } else if (type === "price") {
      setSelectedPriceRange(value);
      if (value) {
        const [min, max] = value.split(" - ").map(Number);
        filtered = filtered.filter(item => item.price >= min && item.price <= max);
      }
    }
    setFilteredData(filtered);
  };

  return (
    <main className="mainContainer">
      <div className="itemFilter">
        <h2>Filter</h2>
        <Filter
          title="Hersteller"
          options={manufacturers}
          onFilterChange={(option) => handleFilterChange("manufacturer", option)}
        />
        <Filter
          title="Preis"
          options={["0 - 500", "500 - 1000", "1000 - 1500", "1500 - 2000"]}
          onFilterChange={(option) => handleFilterChange("price", option)}
        />
        <Filter
          title="Technische Details"
          options={["OS: Android", "Display-Größe: 5 - 6 Zoll", "Konnektivität: 5G"]}
          onFilterChange={(option) => handleFilterChange("technical", option)}
        />
      </div>
      <div className="content">
        <h2>Smartphones</h2>
        <div className="itemContainer">
          {filteredData.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

// Smartphones-Komponente, die die Hauptstruktur der Seite definiert
const Smartphones = () => (
  <>
    <Header site="Smartphones" />
    <Nav />
    <Main />
    <Footer />
  </>
);

export default Smartphones;
