const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/warenkorb", async (req, res) => {
  try {
    const warenkorb = await fs.readFile("warenkorb.json", "utf8");
    const parsedWarenkorb = JSON.parse(warenkorb);
    res.status(200).json(parsedWarenkorb);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/smartphones", async (req, res) => {
  try {
    const smartphones = await fs.readFile("smartphones.json", "utf8");
    const parsedSmartphones = JSON.parse(smartphones);
    res.status(200).json(parsedSmartphones);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/product", async (req, res) => {
  try {
    const product = await fs.readFile("product.json", "utf8");
    const parsedProduct = JSON.parse(product);
    res.status(200).json(parsedProduct);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});


app.get("/smartwatches", async (req, res) => {
  try {
    const smartwatches = await fs.readFile("smartwatches.json", "utf8");
    const parsedSmartwatches = JSON.parse(smartwatches);
    res.status(200).json(parsedSmartwatches);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const products = await fs.readFile("products.json", "utf8");
    const parsedProducts = JSON.parse(products);

    const product = parsedProducts.find((item) => item.id === parseInt(id));
    res.json(product);
  } catch (error) {
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/customer", async (req, res) => {
  try {
    const customer = await fs.readFile("customer.json", "utf8");
    const parsedCustomer = JSON.parse(customer);
    res.status(200).json(parsedCustomer);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await fs.readFile("orders.json", "utf8");
    const parsedOrders = JSON.parse(orders);
    res.status(200).json(parsedOrders);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/home", async (req, res) => {
  try {
    const home = await fs.readFile("home.json", "utf8");
    const parsedHome = JSON.parse(home);
    res.status(200).json(parsedHome);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/home1", async (req, res) => {
  try {
    const home1 = await fs.readFile("home1.json", "utf8");
    const parsedHome1 = JSON.parse(home1);
    res.status(200).json(parsedHome1);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/manufacturers", async (req, res) => {
  try {
    const manufacturers = await fs.readFile("manufacturers.json", "utf8");
    const parsedManufacturers = JSON.parse(manufacturers);
    res.status(200).json(parsedManufacturers);
  } catch (error) {
    console.error("Fehler beim Auslesen", error);
    res.status(500).json(error);
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
