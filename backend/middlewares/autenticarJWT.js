require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ erro: 'Acesso negado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(400).json({ erro: 'Token inválido', detalhes: error.message });
    }
};

// Gerar um token JWT
function gerarToken(usuarioId, perfil) {
    return jwt.sign({ id: usuarioId, perfil }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Verificar token JWT recebido no header
function verificarToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return { erro: "Token inválido", detalhes: error.message };
    }
}
