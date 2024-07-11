import React from "react";
import "./Kontakt.css"; 

function Kontakt() {
  return (
    <div className="kontakt-container">
      <h2>Kontakt</h2>
      
      <div className="kontakt-details">
        <p>
          <strong>Electronica Shop</strong>
        </p>
        <p>[Deine Adresse]</p>
        <p>[Deine Telefonnummer]</p>
        <p>[Deine E-Mail-Adresse]</p>
      </div>

      <form className="kontakt-formular">
        <h3>Schreiben Sie uns eine Nachricht</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default Kontakt;