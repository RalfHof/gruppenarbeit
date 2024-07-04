import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
//import { formatPrice } from "../utils"; 
import "../styles.css";

const Item = ({ item }) => (
  <div className="itemCard">
    <div className="itemContainer">
      <h3 className="itemName">{item.name}</h3>
      
      <img className="itemImage" src={item.image} alt={item.name} />
    </div>
    <div className="descriptionContainer">
      <p className="itemDescription">{item.description}</p>
      <p className="itemPrice">{new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format( item.price)}</p> {/* Formatiere den Preis */}
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
        const response = await fetch("http://localhost:5000/smartphones");
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
        <Filter title="Hersteller" options={["Apple", "Samsung", "Nokia", "Huawei"]} />
        <Filter title="Preis" options={["0 - 500", "500 - 1000", "1000 - 1500", "1500 - 2000"]} />
        <Filter title="Technische Details" options={["OS: Android", "Display-Größe: 5 - 6 Zoll", "Konnektivität: 5G"]} />
      </div>
      <div className="content">
        <h2>Smartphones</h2>
        <div className="itemContainer">
          {data.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

const Smartphones = () => (
  <>
    <Header site="Smartphones" />
    <Nav />
    <Main />
    <Footer />
  </>
);

export default Smartphones;



