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
const readJsonFile = async (filename) => {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Fehler beim Auslesen der Datei ${filename}`, error);
    throw error;
  }
};

// Funktion zum Schreiben von Daten in eine JSON-Datei
const writeJsonFile = async (filename, data) => {
  try {
    await fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Fehler beim Schreiben in die Datei ${filename}`, error);
    throw error;
  }
};

// Definieren der Routen für das Lesen von Daten
app.get("/warenkorb", async (req, res) => {
  try {
    const data = await readJsonFile("warenkorb.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei warenkorb.json` });
  }
});

app.get("/smartphones", async (req, res) => {
  try {
    const data = await readJsonFile("smartphones.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei smartphones.json` });
  }
});

app.get("/product", async (req, res) => {
  try {
    const data = await readJsonFile("product.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei product.json` });
  }
});

app.get("/smartwatches", async (req, res) => {
  try {
    const data = await readJsonFile("smartwatches.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei smartwatches.json` });
  }
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const products = await readJsonFile("products.json");
    const product = products.find(item => item.id === parseInt(id));
    res.json(product);
  } catch (error) {
    console.error("Fehler beim Auslesen der Produkte", error);
    res.status(500).json({ error: `Fehler beim Auslesen der Datei products.json` });
  }
});

app.get("/customer", async (req, res) => {
  try {
    const data = await readJsonFile("customer.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei customer.json` });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const data = await readJsonFile("orders.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei orders.json` });
  }
});

app.get("/home", async (req, res) => {
  try {
    const data = await readJsonFile("home.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei home.json` });
  }
});

app.get("/home1", async (req, res) => {
  try {
    const data = await readJsonFile("home1.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei home1.json` });
  }
});

app.get("/manufacturers", async (req, res) => {
  try {
    const data = await readJsonFile("manufacturers.json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Fehler beim Auslesen der Datei manufacturers.json` });
  }
});

// POST-Endpunkt für die Benutzerregistrierung
app.post("/register", async (req, res) => {
  const { userName, firstName, lastName, email, password, phoneNumber, shippingAddress } = req.body;

  if (!userName || !firstName || !lastName || !email || !password || !phoneNumber) {
    return res.status(400).json({ success: false, message: 'Bitte alle Felder ausfüllen.' });
  }

  try {
    const customers = await readJsonFile("customers.json");

    if (customers.find(customer => customer.email === email)) {
      return res.status(400).json({ success: false, message: 'Email ist bereits registriert.' });
    }

    const newCustomer = {
      customerID: customers.length + 1,
      userName,
      firstName,
      lastName,
      email,
      password,  // In einem realen Szenario sollte das Passwort verschlüsselt gespeichert werden.
      phoneNumber,
      shippingAddress: {
        street: '',
        city: '',
        postalCode: '',
        country: ''
      }
    };

    customers.push(newCustomer);
    await writeJsonFile("customers.json", customers);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fehler beim Registrieren eines neuen Kunden", error);
    res.status(500).json({ success: false, message: 'Registrierung fehlgeschlagen.' });
  }
});

// POST-Endpunkt für den Benutzer-Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Bitte alle Felder ausfüllen.' });
  }

  try {
    const customers = await readJsonFile("customers.json");
    const customer = customers.find(c => c.email === email && c.password === password);

    if (!customer) {
      return res.status(400).json({ success: false, message: 'Falsche Anmeldeinformationen.' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fehler beim Anmelden eines Kunden", error);
    res.status(500).json({ success: false, message: 'Anmeldung fehlgeschlagen.' });
  }
});

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});


