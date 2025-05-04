const Documento = require('../models/Documento');
const Seguranca = require('../models/Seguranca');

exports.registrarDocumento = async (req, res) => {
    try {
        const novoDocumento = new Documento(req.body);
        await novoDocumento.save();
        res.status(201).json(novoDocumento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao registrar documento", error });
    }
};

exports.acessarDocumento = async (req, res) => {
    try {
        const documento = await Documento.findById(req.params.id).populate('segurancaId');
        if (!documento) return res.status(404).json({ message: "Documento não encontrado" });

        res.json(documento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao acessar documento", error });
    }
};

exports.verSeguranca = async (req, res) => {
    try {
        const seguranca = await Seguranca.findOne({ documentoId: req.params.id });
        if (!seguranca) return res.status(404).json({ message: "Dados de segurança não encontrados" });

        res.json(seguranca);
    } catch (error) {
        res.status(500).json({ message: "Erro ao acessar segurança", error });
    }
};
