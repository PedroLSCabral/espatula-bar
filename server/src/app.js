const express = require('express');
const bodyparser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({origin: '*'}));

app.use(bodyparser.json());
app.use(produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});