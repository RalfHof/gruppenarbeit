import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { formatPrice } from "../utils";

const categories = [
  { name: "Smartphones", link: "/smartphones" },
  { name: "Smartwatches", link: "/smartwatches" }
];

const Main = () => {
  const [smartphoneData, setSmartphoneData] = useState([]);
  const [smartwatchData, setSmartwatchData] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [product, setProducts] =useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const smartphoneResponse = await fetch("http://localhost:5000/smartphones");
        const smartphoneResult = await smartphoneResponse.json();
        setSmartphoneData(smartphoneResult);

        const smartwatchResponse = await fetch("http://localhost:5000/smartwatches");
        const smartwatchResult = await smartwatchResponse.json();
        setSmartwatchData(smartwatchResult);

        const uniqueManufacturers = [
          ...new Set([...smartphoneResult, ...smartwatchResult].map(item => item.manufacturer))
        ];
        setManufacturers(uniqueManufacturers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const products = [...smartphoneData, ...smartwatchData];

  return (
    <>
      <main className="homeMain">
        <div className="mainContainer">
          <div className="shardContainer">
            <div className="shardRow">
              {categories.map((category, index) => (
                <a key={index} href={category.link}>
                  <div className="shard">{category.name}</div>
                </a>
              ))}
              {manufacturers.map((manufacturer, index) => (
                <div key={index} className="shard">{manufacturer}</div>
              ))}
            </div>
            <div className="spacer"></div>
            <div className="shardRow">
              {categories.map((category, index) => (
                <a key={index} href={category.link}>
                  <div className="shard">{category.name}</div>
                </a>
              ))}
              {manufacturers.map((manufacturer, index) => (
                <div key={index} className="shard">{manufacturer}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="spacer">
          <h2>Häufig gekauft:</h2>
        </div>
        
        <div className="productContainer">
          {products.map((product, index) => (
            <div key={index} className="itemCard">
              <div className="itemContainer">
                <img className="itemImage" src={product.image} alt={product.name} />
                <div className="itemDescription">{product.description}</div>
                <div className="productPrice">{formatPrice(product.price)}</div>
                <button className="cart-button">In den Warenkorb</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

function Home() {
  return (
    <>
      <Header site={"Home"} />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default Home;


