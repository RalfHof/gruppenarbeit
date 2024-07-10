import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/itemcard.css";

function ItemCard({ option }) {
  return (
    <div className="itemCard" key={product.id}>
      <div className="itemCardContent">
        <h3 className="itemTitle">{product.name}</h3>
        <div className="itemBody">
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <div className="bodyComponent">
            <p>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(option.price)}
            </p>
            <button>Weitere Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;