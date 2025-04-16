const express = require('express');
const router = express.Router();

const registroRoutes = require('./registroRoutes');
const consultaRoutes = require('./consultaRoutes');
const compraRoutes = require('./compraRoutes');

router.use(registroRoutes);
router.use(consultaRoutes);
router.use(compraRoutes);

module.exports = router;