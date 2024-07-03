import React from 'react';
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles.css";

const Product = () => {
  return (
    <>
      <Header site="Product Detail" />
      <Nav />
      <main className="productMain">
        <div className="productContainer">
          <div className="productDetails">
            <h2>Smartphone Apple iPhone 12</h2>
            <p>Bewertung: APPLE iPhone 12</p>
            <div className="productImageContainer">
              <img src="path_to_image" alt="Bild" className="productImage" />
            </div>
            <div className="thumbnailContainer">
              <img src="path_to_thumbnail" alt="Bild" className="thumbnail" />
              <img src="path_to_thumbnail" alt="Bild" className="thumbnail" />
              <img src="path_to_thumbnail" alt="Bild" className="thumbnail" />
              <img src="path_to_thumbnail" alt="Bild" className="thumbnail" />
            </div>
            <div className="recommendedCombos">
              <h3>Empfohlene Kombinationen</h3>
              <div className="recommendedItem">
                <div className="recommendedImageContainer">
                  <img src="path_to_recommended" alt="Empfohlene Kombination" className="recommendedImage" />
                </div>
                <div className="recommendedImageContainer">
                  <img src="path_to_recommended" alt="Empfohlene Kombination" className="recommendedImage" />
                </div>
              </div>
            </div>
          </div>
          <div className="productPurchase">
            <h1>999,99€</h1>
            <div className="productOptions">
              <div className="productOption">
                <p>Farbwahl</p>
                <div className="optionContainer">
                  <button className="optionButton">Schwarz</button>
                  <button className="optionButton">Weiß</button>
                  <button className="optionButton">Blau</button>
                  <button className="optionButton">Rot</button>
                </div>
              </div>
              <div className="productOption">
                <p>Speicherkapazität</p>
                <div className="optionContainer">
                  <button className="optionButton">32GB</button>
                  <button className="optionButton">64GB</button>
                  <button className="optionButton">128GB</button>
                </div>
              </div>
            </div>
            <button className="cart-button">In den Warenkorb</button>
          </div>
        </div>
        <div className="productInfo">
          <div className="infoSection">
            <button className="infoButton">Produktbeschreibung</button>
            <p className="infoContent">Paragraph (&lt;p&gt; mit Lorem ipsum dorem)</p>
          </div>
          <div className="infoSection">
            <button className="infoButton">Technische Daten</button>
            <p className="infoContent">Produkttyp, OS, CPU, Speicher(Backend)</p>
          </div>
          <div className="infoSection">
            <button className="infoButton">Produktbewertung</button>
            <p className="infoContent">Kommentarfunktion, zzgl. Bewertung JSON PUT Request</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
