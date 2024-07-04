const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/smartphones", async (req, res) => {
  try {
    const smartphones = await fs.readFile("smartphones.json", "utf8"); //Speicherung in Variable, um Zustand zu wahren
    const parsedSmartphones = JSON.parse(smartphones); //Zerlegung des JSON Format in JavaScript Objecte
    res.status(200).json(parsedSmartphones);
  } catch (error) {
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/product", async (req, res) => {
  try {
    const product = await fs.readFile("product.json", "utf8"); //Speicherung in Variable, um Zustand zu wahren
    const parsedproduct = JSON.parse(product); //Zerlegung des JSON Format in JavaScript Objecte
    res.status(200).json(parsedproduct);
  } catch (error) {
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/smartwatches", async (req, res) => {
  try {
    const smartwatches = await fs.readFile("smartwatches.json", "utf8");
    const parsedSmartwatches = JSON.parse(smartwatches);
    res.status(200).json(parsedSmartwatches);
  } catch {
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
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
});

app.get("/orders", async (req, res) => {
  try {
    const customer = await fs.readFile("orders.json", "utf8");
    const parsedCustomer = JSON.parse(customer);
    res.status(200).json(parsedCustomer);
  } catch (error) {
    console.error("Fehler beim auslesen", error);
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port  http://localhost:${PORT}`);
});

app.get("/product", (req, res) => readFileAndSendResponse("product.json", res));