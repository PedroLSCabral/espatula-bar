const express = require('express');
const bodyparser = require('body-parser');
const registroRoutes = require('./routes/registroRoutes');
const compraRoutes = require('./routes/compraRoutes');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({origin: '*'}));

app.use(bodyparser.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});