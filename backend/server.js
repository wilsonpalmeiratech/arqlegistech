const express = require("express");
const cors = require("cors");

const documentoRoutes = require("./routes/documentoRoutes");
const segurancaRoutes = require("./routes/segurancaRoutes");
const acessoRoutes = require("./routes/acessoRoutes");
const propriedadeRoutes = require("./routes/propriedadeRoutes");

app.use("/api/seguranca", documentoRoutes);
app.use("/api/seguranca", segurancaRoutes);
app.use("/api/acesso", acessoRoutes);
app.use("/api/propriedadeIntelectual", propriedadeRoutes);


const app = express();
app.use(express.json());
app.use(cors());

// Roteamento para APIs individuais
app.use("/api/documento", documentoRoutes);
app.use("/api/seguranca", segurancaRoutes);
app.use("/api/acesso", acessoRoutes);
app.use("/api/propriedadeIntelectual", propriedadeRoutes);

app.listen(3000, () => console.log("API Gateway rodando na porta 3000"));
