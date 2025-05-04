const bcrypt = require('bcrypt');

// Gerar hash da senha
async function gerarHashSenha(senha) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(senha, salt);
}

// Comparar senha digitada com hash armazenado
async function verificarSenha(senhaDigitada, senhaHash) {
    return await bcrypt.compare(senhaDigitada, senhaHash);
}
