const mongoose = require('mongoose');

const PropriedadeIntelectualSchema = new mongoose.Schema({
    dcCriador: String,
    dcContribuidor: String,
    dcPublicador: String,
    dcDireitos: String,
    dcEditor: String,
    documentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Documento' }
});

module.exports = mongoose.model('PropriedadeIntelectual', PropriedadeIntelectualSchema);
// Relacionamento: Vincula informações de propriedade intelectual ao documento.
