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
    listarTodosProdutos
};
