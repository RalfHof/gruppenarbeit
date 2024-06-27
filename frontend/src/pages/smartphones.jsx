
  
import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

function Item({ item }) {
  return (
    <div className="itemCard">
      <div className="itemContainer">
        <h3 className="itemName">{item.name}</h3>
        <img className="itemImage" src={item.image} alt={item.name} />
      </div>
      <div className="discriptionContainer">
        <p className="itemDescriptiom">{item.description}</p>
        <p className="itemPrice">{item.price}€</p>
        <button className="cart-button">In den Warenkorb</button>
      </div>
    </div>
  );
}

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/smartphones")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main className="smartphoneMain">
      <div className="itemFilter">
        <h2>Filter</h2>
        <div className="filter">
          <p>Hersteller</p>
          <select>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Huawei</option>
            <option>Xiaomi</option>
          </select>
        </div>
        <div className="filter">
          <p>Preis</p>
          <select>
            <option>0 - 500</option>
            <option>500 - 1000</option>
            <option>1000 - 1500</option>
            <option>1500 - 2000</option>
          </select>
        </div>
      </div>
      <div className="content">
        <h2>Smartphones</h2>
        <div className="itemContainer">
          {data.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Smartphones() {
  return (
    <>
      <Header site={"Smartphones"} />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default Smartphones;