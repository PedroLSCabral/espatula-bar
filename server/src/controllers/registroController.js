const Cliente = require('../models/Cliente');
const Funcionario = require('../models/Funcionario');

class RegistroController {
    async cadastrarCliente(req, res) {
        const { nome, idade, email, cpf, cidade, torcida } = req.body;
        try {
            const cliente = await Cliente.create({
                nome,
                idade,
                email,
                cpf,
                cidade,
                torcida
            });
            res.status(201).json(cliente);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar cliente' });
        }
    }
    async cadastrarFuncionario(req, res) {
        const { nome, idade, email, senha, cpf, cidade, torcida} = req.body;
        try {
            const funcionario = await Funcionario.create({
                nome,
                idade,
                email,
                senha,
                cpf,
                cidade,
                torcida
            });
            res.status(201).json(funcionario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar funcionário' });
        }
    }
}

module.exports = new RegistroController();