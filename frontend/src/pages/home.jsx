import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

const categories = [
  { name: "Smartphones", link: "/smartphones" },
  { name: "Smartwatches", link: "/smartwatches" }
];

const manufacturers = ["Hersteller 1", "Hersteller 2", "Hersteller 3", "Hersteller 4"];

const Main = () => {
  const renderShards = (items, type) =>
    items.map((item, index) => (
      <a key={index} href={item.link || "#"}>
        <div className="shard">{type === "categories" ? item.name : item}</div>
      </a>
    ));

  return (
    <>
      <main className="homeMain">
        <div className="shardContainer">
          <div className="shardRow">
            {renderShards(categories, "categories")}
            {renderShards(manufacturers, "manufacturers")}
          </div>
          <div className="spacer"></div>
          <div className="shardRow">
            {renderShards(categories, "categories")}
            {renderShards(manufacturers, "manufacturers")}
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



