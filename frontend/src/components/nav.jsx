import React from "react";

function Nav() {
  return (
    <nav>
      <div className="site-title">
        <a href="/">
          <h1>SmartShop</h1>
        </a>
        <p>Get your smart combination right now</p>
      </div>
      <ul>
        <a href="/">
          <li>Startseite</li>
        </a>
        <a href="/smartphones">
          <li>Smartphones</li>
        </a>
        <a href="/smartwatches">
          <li>Smartwatches</li>
        </a>
      </ul>
      <div className="cart">
        <a href="/cart">Warenkorb</a>
      </div>
    </nav>
  );
}

export default Nav;