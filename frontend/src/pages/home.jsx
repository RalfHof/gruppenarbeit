import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles.css";

const categories = [
  { name: "Smartphones", link: "/smartphones" },
  { name: "Smartwatches", link: "/smartwatches" }
];

const manufacturers = ["Hersteller 1", "Hersteller 2", "Hersteller 3", "Hersteller 4"];

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

const Main = () => {
  return (
    <>
      <main className="homeMain">
        <div className="mainContainer">
          <div className="itemFilter">
            <h2>Filter</h2>
            <Filter title="Hersteller" options={manufacturers} />
            <Filter title="Preis" options={['0 - 20', '20 - 50', '50 - 100', '100 - 200']} />
            <Filter title="Farbe" options={['Schwarz', 'Weiß', 'Rot', 'Blau']} />
            <Filter title="Speicher" options={['8GB', '16GB', '32GB', '64GB']} />
          </div>
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




