import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

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

  // Filter-Komponente
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
        const response = await fetch("http://localhost:5000/accessories");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="accessoriesMain">
      <div className="itemFilter">
        <h2>Filter</h2>
        <Filter title="Kategorie" options={['Hüllen', 'Ladegeräte', 'Kopfhörer', 'Bildschirmschutz']} />
        <Filter title="Preis" options={['0 - 20', '20 - 50', '50 - 100', '100 - 200']} />
        <Filter title="Hersteller" options={[ 'Appel', 'Samsung', 'Huawei', 'Ximion', 'usw']} />
      </div>
      <div className="content">
        <h2>Zubehör</h2>
        <div className="itemContainer">
          {data.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

const Accessories = () => (
  <>
    <Header site="Zubehör" />
    <Nav />
    <Main />
    <Footer />
  </>
);

export default Accessories;



