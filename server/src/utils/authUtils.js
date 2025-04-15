const { bcrypt } = require('bcrypt');
const saltRounds = 12;

async function gerarSalt() {
    return await bcrypt.genSalt(saltRounds);
}

async function hashSenha(senha, salt) {
    return await bcrypt.hash(senha, salt);
}

async function verificarSenha(senha, hashArmazenado) {
    return await bcrypt.compare(senha, hashArmazenado);
}

module.exports = {
    gerarSalt,
    hashSenha,
    verificarSenha
};