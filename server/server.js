const express = require('express');
const bodyparser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/testDB.db');

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.post('/produtos', (req, res) => {
    const { nome, tipo, qtd, preco} = req.body;
    const query = 'INSERT INTO Produtos (nome, tipo, qtd, preco) VALUES (?, ?, ?, ?)';
    db.run(query, [nome, tipo, qtd, preco], function(err) {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao inserir produto');
        } else {
            res.status(201).send('Produto inserido com sucesso');
        }
    });

});

app.get('/produtos', (req, res) => {
    const query = 'SELECT * FROM Produtos';
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).send('Erro ao buscar produtos');
        } else {
            res.status(200).send(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});