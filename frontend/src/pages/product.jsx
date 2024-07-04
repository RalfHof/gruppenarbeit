import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles.css";
import "../product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fehler beim Laden der Produkte:', error));
  }, []);

  return (
    <>
      <Header site="Product Detail" />
      <Nav />
      <main className="productMain">
        {products.map(product => (
          <div className="productContainer" key={product.id}>
            <div className="productDetails">
              <h2>{product.name}</h2>
              <p>Bewertung: {product.name}</p>
              <div className="productImageContainer">
                <img src={product.image} alt={product.name} className="productImage" />
              </div>
              <div className="thumbnailContainer">
                {product.thumbnails.map((thumb, index) => (
                  <img key={index} src={thumb} alt={product.name} className="thumbnail" />
                ))}
              </div>
              <div className="recommendedCombos">
                <h3>Empfohlene Kombinationen</h3>
                <div className="recommendedItem">
                  {product.recommended.map((rec, index) => (
                    <div key={index} className="recommendedImageContainer">
                      <img src={rec} alt="Empfohlene Kombination" className="recommendedImage" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="productPurchase">
              <h1>{new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(product.price)}</h1>
              <div className="productOptions">
                <div className="productOption">
                  <p>Farbwahl</p>
                  <div className="optionContainer">
                    {product.colors.map((color, index) => (
                      <button key={index} className="optionButton">{color}</button>
                    ))}
                  </div>
                </div>
                <div className="productOption">
                  <p>Speicherkapazität</p>
                  <div className="optionContainer">
                    {product.storageOptions.map((storage, index) => (
                      <button key={index} className="optionButton">{storage}</button>
                    ))}
                  </div>
                </div>
              </div>
              <button className="cart-button">In den Warenkorb</button>
            </div>
          </div>
        ))}
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


