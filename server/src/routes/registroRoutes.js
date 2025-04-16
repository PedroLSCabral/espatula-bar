const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

router.post('/clientes', registroController.cadastrarCliente);

router.post('/funcionarios', registroController.cadastrarFuncionario);

router.post('/produtos', registroController.cadastrarProduto);

router.post('/ingredientes', registroController.cadastrarIngrediente);

module.exports = router;