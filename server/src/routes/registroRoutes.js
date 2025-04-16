const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

router.post('/registro/clientes', registroController.cadastrarCliente);

router.post('/registro/funcionarios', registroController.cadastrarFuncionario);

router.post('/registro/produtos', registroController.cadastrarProduto);

router.post('/registro/ingredientes', registroController.cadastrarIngrediente);

router.post('/registro/produtoingrediente', registroController.cadastrarProdutoIngrediente);

module.exports = router;