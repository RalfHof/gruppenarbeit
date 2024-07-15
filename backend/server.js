const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Funktion zur Vereinfachung des Lesens und Sendens von JSON-Dateien
const readJsonFile = async (filename, res) => {
  try {
    const data = await fs.readFile(filename, 'utf8');
    const parsedData = JSON.parse(data);
    res.status(200).json(parsedData);
  } catch (error) {
    console.error(`Fehler beim Auslesen der Datei ${filename}`, error);
    res.status(500).json({ error: `Fehler beim Auslesen der Datei ${filename}` });
  }
};

// Funktion zum Schreiben von Daten in eine JSON-Datei
const writeJsonFile = async (filename, data, res) => {
  try {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
    res.status(200).json({ message: `Erfolgreich in ${filename} gespeichert` });
  } catch (error) {
    console.error(`Fehler beim Schreiben in die Datei ${filename}`, error);
    res.status(500).json({ error: `Fehler beim Schreiben in die Datei ${filename}` });
  }
};

// Definieren der Routen für das Lesen von Daten
app.get("/warenkorb", async (req, res) => {
  await readJsonFile("warenkorb.json", res);
});

app.get("/smartphones", async (req, res) => {
  await readJsonFile("smartphones.json", res);
});

app.get("/product", async (req, res) => {
  await readJsonFile("product.json", res);
});

app.get("/smartwatches", async (req, res) => {
  await readJsonFile("smartwatches.json", res);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const products = await fs.readFile("products.json", "utf8");
    const parsedProducts = JSON.parse(products);
    const product = parsedProducts.find((item) => item.id === parseInt(id));
    res.json(product);
  } catch (error) {
    console.error("Fehler beim Auslesen der Produkte", error);
    res.status(500).json(error);
  }
});

app.get("/customer", async (req, res) => {
  await readJsonFile("customer.json", res);
});

app.get("/orders", async (req, res) => {
  await readJsonFile("orders.json", res);
});

app.get("/home", async (req, res) => {
  await readJsonFile("home.json", res);
});

app.get("/home1", async (req, res) => {
  await readJsonFile("home1.json", res);
});

app.get("/manufacturers", async (req, res) => {
  await readJsonFile("manufacturers.json", res);
});

// POST-Endpunkt für die Benutzerregistrierung
app.post("/register", async (req, res) => {
  try {
    const {
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      shippingAddress
    } = req.body;

    // Laden der vorhandenen Kunden
    const customers = await fs.readFile("customer.json", "utf8");
    const parsedCustomers = JSON.parse(customers);

    // Generierung der customerID (nur ein einfaches Beispiel)
    const nextCustomerId = parsedCustomers.length + 1;

    const newCustomer = {
      customerID: nextCustomerId,
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      shippingAddress
    };

    // Hinzufügen des neuen Kunden zur Liste
    parsedCustomers.push(newCustomer);

    // Aktualisierte Kundenliste in die Datei speichern
    await writeJsonFile("customer.json", parsedCustomers, res);
  } catch (error) {
    console.error("Fehler beim Registrieren eines neuen Kunden", error);
    res.status(500).json(error);
  }
});

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
