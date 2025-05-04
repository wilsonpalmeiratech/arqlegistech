const mongoose = require('mongoose');

const AcessoSchema = new mongoose.Schema({
    documentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Documento' },
    usuarioId: String,
    perfilAcesso: String,
    horarioAcesso: { type: Date, default: Date.now },
    resultadoAcesso: { type: String, enum: ["permitido", "negado"], default: "negado" }
});

module.exports = mongoose.model('Acesso', AcessoSchema);
// Relacionamento: Cada tentativa de acesso é vinculada ao documento. 
// Auditoria: Registra histórico de quem acessou ou tentou acessar.
