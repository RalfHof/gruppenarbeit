import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { formatPrice } from "../utils";
import "../styles.css";
//import "../product.css";

const Item = ({ item }) => (
  <div className="itemCard">
    <div className="itemContainer">
      <h3 className="itemName">{item.name}</h3>
      <img className="itemImage" src={item.image} alt={item.name} />
    </div>
    <div className="descriptionContainer">
      <p className="itemDescription">{item.description}</p>
      <p className="itemPrice">{formatPrice(item.price)}</p> {/* Formatiere den Preis */}
      <button className="cart-button">In den Warenkorb</button>
    </div>
  </div>
);

const Filter = ({ title, options }) => (
  <div className="filter">
    <p>{title}</p>
    <div className="filter-options">
      {options.map((option, index) => (
        <button key={index} className="filter-button">{option}</button>
      ))}
    </div>
  </div>
);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/smartwatches");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="mainContainer">
      <div className="itemFilter">
        <h2>Filter</h2>
        <Filter title="Hersteller" options={['Apple', 'Samsung', 'Fitbit', 'Garmin', 'Google Pixel Watch 2', 'XPLORA Kids Watch X6 Play']} />
        <Filter title="Preis" options={['0 - 100', '100 - 200', '200 - 300', '300 - 800']} />
        <Filter title="Technische Details" options={['Typ: Smartwatch', 'OS: watchOS', 'Display-Größe: 41mm oder 45mm', 'Konnektivität: GPS + Cellular']} />
      </div>
      <div className="content">
        <h2>Smartwatches</h2>
        <div className="itemContainer">
          {data.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

const Smartwatches = () => (
  <>
    <Header site="Smartwatches" />
    <Nav />
    <Main />
    <Footer />
  </>
);

export default Smartwatches;









