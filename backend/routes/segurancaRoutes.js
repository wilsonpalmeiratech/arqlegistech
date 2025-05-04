const express = require("express");
const router = express.Router();
const SegurancaController = require("../controllers/segurancaController");
const autenticarJWT = require("../middlewares/autenticarJWT");

router.post("/", autenticarJWT, SegurancaController.adicionarConfiguracao);
router.get("/:id", autenticarJWT, SegurancaController.consultarSeguranca);

module.exports = router;
