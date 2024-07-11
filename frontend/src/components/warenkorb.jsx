import React from "react";
import "../warenkorb.css";
function Warenkorb({ cartItems, removeFromCart }) {
  const totalProductCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  return (
    <div className="warenkorb">
      <h2>Warenkorb ({totalProductCount} {totalProductCount === 1 ? "Artikel" : "Artikel"})</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} -
                {item.quantity} x {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(item.price)}
                <button onClick={() => removeFromCart(item)}>Entfernen</button>
              </li>
            ))}
          </ul>
          <p>
            Gesamtpreis: {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
              cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
            )}
          </p>
          <button>Zur Kasse gehen</button>
        </>
      )}
    </div>
  );
}
export default Warenkorb;