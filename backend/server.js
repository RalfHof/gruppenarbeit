const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: "Product 1", description: "Description 1", price: "€100" },
  { id: 2, name: "Product 2", description: "Description 2", price: "€200" },
  { id: 3, name: "Product 3", description: "Description 3", price: "€300" },
  { id: 4, name: "Product 4", description: "Description 4", price: "€400" },
  { id: 5, name: "Product 5", description: "Description 5", price: "€500" },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});