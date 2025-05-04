router.get('/documento/:id/seguranca', async (req, res) => {
    try {
        const documento = await Documento.findById(req.params.id);
        if (!documento) return res.status(404).json({ erro: "Documento não encontrado" });

        const seguranca = await Seguranca.findById(documento.segurancaId);
        if (!seguranca) return res.status(404).json({ erro: "Informações de segurança não encontradas" });

        res.json(seguranca);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao acessar segurança do documento", detalhes: error.message });
    }
});
