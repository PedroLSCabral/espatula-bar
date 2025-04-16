const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.get('/consulta/produtos', consultaController.consultarProduto);

router.get('/consulta/ingredientes', consultaController.consultarIngrediente);

router.get('/consulta/produtoingrediente', consultaController.consultarProdutoIngrediente);

router.get('/consulta/funcionarios', consultaController.consultarFuncionario);

router.get('/consulta/clientes', consultaController.consultarCliente);

router.get('/consulta/vendas', consultaController.consultarVenda);

router.get('/consulta/relatorio', consultaController.consultarRelatorioVendas);

module.exports = router;