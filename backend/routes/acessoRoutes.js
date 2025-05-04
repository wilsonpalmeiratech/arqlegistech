const express = require("express");
const router = express.Router();
const AcessoController = require("../controllers/acessoController");
const autenticarJWT = require("../middlewares/autenticarJWT");

router.post("/", autenticarJWT, AcessoController.registrarTentativa);
router.get("/:documentoId", autenticarJWT, AcessoController.historicoAcessos);

module.exports = router;
