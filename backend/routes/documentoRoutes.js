const express = require('express');
const router = express.Router();
const DocumentoController = require('../controllers/documentoController');

router.post("/documento", DocumentoController.registrarDocumento);
router.get("/documento/:id", DocumentoController.acessarDocumento);
router.get("/documento/:id/seguranca", DocumentoController.verSeguranca);


module.exports = router;
