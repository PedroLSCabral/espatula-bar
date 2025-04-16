const express = require('express');
const bodyparser = require('body-parser');
const registroRoutes = require('./routes/registroRoutes');
const compraRoutes = require('./routes/compraRoutes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({origin: '*'}));

app.use(bodyparser.json());

app.use(compraRoutes);
app.use(registroRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});