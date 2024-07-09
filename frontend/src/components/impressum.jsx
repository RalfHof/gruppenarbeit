import React from "react";
import "./Impressum.css"


function Impressum() {
  return (
    <div className="impressum-container">
      <h2>Impressum</h2>

      <h3>Angaben gemäß § 5 TMG:</h3>
      <p>
        Max Mustermann <br />
        Phantasia Str. 66 <br />
        12345 Phantasia
      </p>

      <h3>Kontakt:</h3>
      <p>
        Telefon: 00000 123456789 <br />
        E-Mail: info@shop.de
      </p>
        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
      <p>
        Max Mustermann <br />
        Muster Str. 66 <br />
        12345 Phantasia
      </p>

      
    </div>
  );
}

export default Impressum;
