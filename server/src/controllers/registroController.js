const { Cliente, Funcionario, Produto, Ingrediente, ProdutoIngrediente } = require('../models');

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
            res.status(201).json({
                message: 'Cliente cadastrado com sucesso',
                cliente: {
                    id: cliente.id,
                    nome: cliente.nome,
                    idade: cliente.idade,
                    email: cliente.email,
                    cpf: cliente.cpf,
                    cidade: cliente.cidade,
                    torcida: cliente.torcida
                }
            });
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
            res.status(201).json({
                message: 'Funcionário cadastrado com sucesso',
                funcionario: {
                    id: funcionario.id,
                    nome: funcionario.nome,
                    idade: funcionario.idade,
                    email: funcionario.email,
                    cpf: funcionario.cpf,
                    cidade: funcionario.cidade,
                    torcida: funcionario.torcida
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar funcionário' });
        }
    }
    async cadastrarProduto(req, res) {
        const { nome, qtd, preco, categoria } = req.body;
        try {
            const produto = await Produto.create({
                nome,
                qtd,
                preco,
                categoria
            });
            res.status(201).json({
                message: 'Produto cadastrado com sucesso',
                produto: {
                    id: produto.id,
                    nome: produto.nome,
                    qtd: produto.qtd,
                    preco: produto.preco,
                    categoria: produto.categoria
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar produto' });
        }
    }
    async cadastrarIngrediente(req, res) {
        const { nome, qtd, categoria } = req.body;
        try {
            const ingrediente = await Ingrediente.create({
                nome,
                qtd,
                categoria
            });
            res.status(201).json({
                message: 'Ingrediente cadastrado com sucesso',
                ingrediente: {
                    id: ingrediente.id,
                    nome: ingrediente.nome,
                    qtd: ingrediente.qtd,
                    categoria: ingrediente.categoria
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar ingrediente' });
        }
    }
    async cadastrarProdutoIngrediente(req, res) {
        const { id_produto, id_ingrediente, qtd } = req.body;
        try {
            const produtoIngrediente = await ProdutoIngrediente.create({
                id_produto,
                id_ingrediente,
                qtd
            });
            res.status(201).json({
                message: 'Produto e ingrediente cadastrados com sucesso',
                produtoIngrediente: {
                    id_produto: produtoIngrediente.id_produto,
                    id_ingrediente: produtoIngrediente.id_ingrediente,
                    qtd: produtoIngrediente.qtd
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar produto e ingrediente' });
        }
    }



}

module.exports = new RegistroController();