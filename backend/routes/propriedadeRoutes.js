const express = require("express");
const router = express.Router();
const PropriedadeController = require("../controllers/propriedadeController");
const autenticarJWT = require("../middlewares/autenticarJWT");

router.post("/", autenticarJWT, PropriedadeController.registrarAutoria);
router.get("/:documentoId", autenticarJWT, PropriedadeController.consultarAutoria);

module.exports = router;
