const SegurancaSchema = new mongoose.Schema({
    controleAcesso: Boolean,
    copiaSeguranca: Boolean,
    trilhasAuditoria: Boolean,
    hash: String,
    blockchain: {
        estruturaBlock: {
            timeStamp: Date,
            hashBlock: String,
            prevBlockHash: String
        },
        transacoes: [
            {
                tipo: String,
                idDocumento: { type: mongoose.Schema.Types.ObjectId, ref: 'Documento' },
                premisEventoId: String, // Ligação com eventos PREMIS
                timestamp: { type: Date, default: Date.now }
            }
        ]
    }
});

// Relacionamento: Vincula transações diretamente ao documento. 
// Blockchain: Garante rastreabilidade da auditoria.