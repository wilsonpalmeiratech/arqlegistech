const EntidadeSchema = new mongoose.Schema({
    titulo: String,
    formatoOriginal: String,
    quantBytes: Number,
    estrutura: {
        tipoObjeto: String,
        metadadosEstruturais: Object
    },
    premis: {
        objeto: { 
            identificadorObjeto: String, 
            nomeOriginal: String,
            formatoPreservado: String // Formato após migração
        },
        eventoPreservacao: { 
            eventoIdentificador: String, 
            eventoTipo: String, // Ex: Conversão de formato
            eventoDataHora: Date,
            agenteResponsavel: String 
        }
    },
    documentoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Documento' }
});

// Relacionamento: Cada entidade está vinculada a um documento arquivístico.