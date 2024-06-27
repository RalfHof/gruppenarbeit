import React, { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

const Item = ({ item }) => (
  <div className="itemCard">
    <div className="itemContainer">
      <h3 className="itemName">{item.name}</h3>
      <img className="itemImage" src={item.image} alt={item.name} />
    </div>
    <div className="discriptionContainer">
      <p className="itemDescription">{item.description}</p>
      <p className="itemPrice">{item.price}€</p>
      <button className="cart-button">In den Warenkorb</button>
    </div>
  </div>
);

const Filter = ({ title, options }) => (
  <div className="filter">
    <p>{title}</p>
    <select>
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  </div>
);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/smartphones")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <main className="smartphoneMain">
      <div className="itemFilter">
        <h2>Filter</h2>
        <Filter title="Hersteller" options={['Apple', 'Samsung', 'Huawei', 'Xiaomi']} />
        <Filter title="Preis" options={['0 - 500', '500 - 1000', '1000 - 1500', '1500 - 2000']} />
      </div>
      <div className="content">
        <h2>Smartphones</h2>
        <div className="itemContainer">
          {data.map(item => <Item key={item.id} item={item} />)}
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
