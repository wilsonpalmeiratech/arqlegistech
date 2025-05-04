const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ email });

        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            return res.status(401).json({ erro: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ id: usuario._id, perfil: usuario.perfil }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ erro: 'Erro no login', detalhes: error.message });
    }
};
