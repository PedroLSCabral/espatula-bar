const express = require('express');
const router = express.Router();

const registroRoutes = require('./registroRoutes');
const consultaRoutes = require('./consultaRoutes');
const compraRoutes = require('./compraRoutes');
const updateRoutes = require('./updateRoutes');

router.use(registroRoutes);
router.use(consultaRoutes);
router.use(compraRoutes);
router.use(updateRoutes);

module.exports = router;