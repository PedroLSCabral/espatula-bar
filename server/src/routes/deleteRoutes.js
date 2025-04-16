const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController');

router.delete('/delete/produtos', deleteController.deletarProduto);

router.delete('/delete/ingredientes', deleteController.deletarIngrediente);

router.delete('/delete/produtoingrediente', deleteController.deletarProdutoIngrediente);

router.delete('/delete/funcionarios', deleteController.deletarFuncionario);

router.delete('/delete/clientes', deleteController.deletarCliente);

router.delete('/delete/vendas', deleteController.deletarVenda);

module.exports = router;