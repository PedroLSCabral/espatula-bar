const ProdutoManager = require('../models/produtomanager');
const produtoManager = new ProdutoManager();

const inserirProduto = (req, res) => {
    const { nome, tipo, qtd, preco } = req.body;
    produtoManager.inserir(nome, tipo, qtd, preco, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(result);
        }
    });
};

const alterarProduto = (req, res) => {
    const { id, nome, tipo, qtd, preco } = req.body;
    produtoManager.alterar(id, nome, tipo, qtd, preco, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const pesquisarPorNome = (req, res) => {
    const { nome } = req.query;
    produtoManager.pesquisarPorNome(nome, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const removerProduto = (req, res) => {
    const { id } = req.body;
    produtoManager.remover(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const exibirProduto = (req, res) => {
    const { id } = req.params;
    produtoManager.exibir(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const listarTodosProdutos = (req, res) => {
    produtoManager.listarTodos((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

module.exports = {
    inserirProduto,
    alterarProduto,
    pesquisarPorNome,
    removerProduto,
    exibirProduto,
    listarTodosProdutos
};
