const express = require("express");
const rotas = require("./routes/routes");

const path = require("path");
const app = express();

// Configura o middleware para servir aquivos estáticos da pasta 'src/public'
app.use(express.static(path.join(__dirname, "public")));

// Middleware para processar dados do tipo application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(rotas);

app.listen(3000, () => {
  console.log("Servidor: http://localhost:3000");
});
