const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Nama: ${name}, Email: ${email}, Pesan:${message}`);
  res.status(200).send("Pesan diterima");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
