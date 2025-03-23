const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.inserirProduto);

router.get('/produtos', produtoController.listarTodosProdutos);

module.exports = router;