router.get('/documento/:id', async (req, res) => {
    try {
        const documento = await Documento.findById(req.params.id).populate('segurancaId');
        if (!documento) return res.status(404).json({ erro: "Documento não encontrado" });
        res.json(documento);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao acessar documento", detalhes: error.message });
    }
});
