const Documento = require('../models/Documento');

exports.registrar = async (req, res) => {
    try {
        const documento = new Documento(req.body);
        await documento.save();
        res.status(201).json(documento);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao registrar documento", detalhes: error.message });
    }
};

exports.acessar = async (req, res) => {
    try {
        const documento = await Documento.findById(req.params.id);
        if (!documento) return res.status(404).json({ erro: "Documento não encontrado" });
        res.json(documento);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao acessar documento", detalhes: error.message });
    }
};
