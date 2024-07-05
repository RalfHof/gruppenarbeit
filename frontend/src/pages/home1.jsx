import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Filter = ({ title, options }) => (
  <div className="filter">
    <p>{title}</p>
    <select>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  </div>
);

const Item = ({ item }) => (
  <div className="itemCard">
    <div className="itemContainer">
      <h3 className="itemName">{item.name}</h3>
      <img className="itemImage" src={item.image} alt={item.name} />
    </div>
    <div className="descriptionContainer">
      <p className="itemDescription">{item.description}</p>
      <p className="itemPrice">{item.price}€</p>
      <button className="cart-button">In den Warenkorb</button>
    </div>
  </div>
);

const Main = () => {
  const dummyItems = [
    { id: 1, name: "Produkt 1", description: "Beschreibung 1", price: 100, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Produkt 2", description: "Beschreibung 2", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Produkt 3", description: "Beschreibung 3", price: 300, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Produkt 4", description: "Beschreibung 4", price: 400, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Produkt 5", description: "Beschreibung 5", price: 500, image: "https://via.placeholder.com/150" }
  ];

  return (
    <>
      <main>
        <div className="mainContainer">
          <div className="itemFilter">
            <Filter title="Preis" options={["0-50", "50-100", "100-150", "150-300", "300-500"]} />
            <Filter title="Hersteller" options={["Hersteller 1", "Hersteller 2", "Hersteller 3"]} />
          </div>
          <div className="itemContainer">
            {dummyItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

function Home1() {
  return (
    <>
      <Header site={"Home1"} />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default Home1;
