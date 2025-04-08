const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.inserirProduto);

router.put('/produtos', produtoController.alterarProduto);

router.get('/produtos/pesquisar', produtoController.pesquisarPorNome);

router.delete('/produtos', produtoController.removerProduto);

router.get('/produtos/:id', produtoController.exibirProduto);

router.get('/produtos', produtoController.listarTodosProdutos);

module.exports = router;