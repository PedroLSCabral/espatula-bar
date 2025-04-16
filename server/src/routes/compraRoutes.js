const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

router.post('/compras', compraController.criarCompra);

module.exports = router;