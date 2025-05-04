router.post('/documento', async (req, res) => {
    try {
        const novoDocumento = new Documento(req.body);
        await novoDocumento.save();
        res.status(201).json(novoDocumento);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar documento", detalhes: error.message });
    }
});
