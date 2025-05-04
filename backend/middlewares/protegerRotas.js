const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ erro: 'Acesso negado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(400).json({ erro: 'Token inválido' });
    }
};


function autenticarMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ erro: 'Acesso negado' });

    const usuario = verificarToken(token);
    if (!usuario) return res.status(400).json({ erro: 'Token inválido' });

    req.usuario = usuario;
    next();
}
