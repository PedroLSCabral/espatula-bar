const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

router.post('/clientes', registroController.cadastrarCliente);

router.post('/funcionarios', registroController.cadastrarFuncionario);

module.exports = router;