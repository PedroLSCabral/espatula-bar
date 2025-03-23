const db = require('../config/database');

class ProdutoManager {
    inserir(nome, tipo, qtd, preco, callback) {
        const query = 'INSERT INTO Produtos (nome, tipo, qtd, preco) VALUES (?, ?, ?, ?)';
        db.run(query, [nome, tipo, qtd, preco], function(err) {
            if (err) {
                console.log(err);
                callback('Erro ao inserir produto', null);
            } else {
                callback(null, 'Produto inserido com sucesso');
            }
        });
    }

    listarTodos(callback) {
        const query = 'SELECT * FROM Produtos';
        db.all(query, (err, rows) => {
            if (err) {
                console.log(err);
                callback('Erro ao buscar produtos', null);
            } else {
                callback(null, rows);
            }
        });
    }

};

module.exports = ProdutoManager;

