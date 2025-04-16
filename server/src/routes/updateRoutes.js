const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

router.put('/update/produtos', updateController.atualizarProduto);

router.put('/update/ingredientes', updateController.atualizarIngrediente);

router.put('/update/produtoingrediente', updateController.atualizarProdutoIngrediente);

router.put('/update/funcionarios', updateController.atualizarFuncionario);

router.put('/update/clientes', updateController.atualizarCliente);

router.put('/update/vendas', updateController.atualizarVenda);

module.exports = router;