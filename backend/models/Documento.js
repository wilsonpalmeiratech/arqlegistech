const DocumentoSchema = new mongoose.Schema({
    titulo: String,
    formatoOriginal: String,
    quantBytes: Number,
    ultimaModificacao: { type: Date, default: Date.now },
    versoes: [
        { 
            versaoId: Number, 
            arquivo: String, 
            modificacao: Date,
            usuarioResponsavel: String // Quem editou a versão
        }
    ],
    metadadosDublinCore: Object, // Dublin Core para descrição
    nivelSigilo: { type: String, enum: ["publico", "restrito", "confidencial"], default: "publico" },
    segurancaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seguranca' },
    premisEventos: [
        {
            eventoId: String,
            tipoEvento: String, // Ex: Criação, Modificação, Migração
            dataHoraEvento: Date,
            agenteResponsavel: String,
            justificativa: String // Motivo da alteração ou ação
        }
    ]
});

// Relacionamento: Usa segurancaId para vincular à coleção de segurança.