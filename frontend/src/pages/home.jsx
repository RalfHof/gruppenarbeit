import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { formatPrice } from "../utils"; 
import "../styles.css";

const categories = [
  { name: "Smartphones", link: "/smartphones" },
  { name: "Smartwatches", link: "/smartwatches" }
  
];

const manufacturers = ["Hersteller 1", "Hersteller 2", "Hersteller 3", "Hersteller 4"];

const products = [
  { name: "Produkt 1", description: "Beschreibung 1", price: "100€", image: "https://via.placeholder.com/150", link: "#" },
  { name: "Produkt 2", description: "Beschreibung 2", price: "200€", image: "https://via.placeholder.com/150", link: "#" },
  { name: "Produkt 3", description: "Beschreibung 3", price: "300€", image: "https://via.placeholder.com/150", link: "#" },
  { name: "Produkt 4", description: "Beschreibung 4", price: "400€", image: "https://via.placeholder.com/150", link: "#" },
  { name: "Produkt 5", description: "Beschreibung 5", price: "500€", image: "https://via.placeholder.com/150", link: "#" }
];

const Main = () => {
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
                <div className="productPrice">{formatPrice(product.price)}</div> {/* Formatiere den Preis */}
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
      <Header site={"Startseite"} />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default Home;










