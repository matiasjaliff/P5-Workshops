const express = require("express");
const app = express();
const volleyball = require("volleyball");

// logging middleware
app.use(volleyball);

// parsing middleware
app.use(express.json());

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
