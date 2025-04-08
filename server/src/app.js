const express = require('express');
const bodyparser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});