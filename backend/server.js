const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const readFileAndSendResponse = async (filePath, res) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error(`Fehler beim Auslesen der Datei ${filePath}`, error);
    res.status(500).json(error);
  }
};

app.get("/smartphones", (req, res) => readFileAndSendResponse("smartphones.json", res));
app.get("/smartwatches", (req, res) => readFileAndSendResponse("smartwatches.json", res));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
