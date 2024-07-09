import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-footer">
          <Link to={`/smartphones/${item.id}`} className="btn btn-primary">Mehr erfahren</Link>
        </div>
      </div>
    </div>
  );
}
