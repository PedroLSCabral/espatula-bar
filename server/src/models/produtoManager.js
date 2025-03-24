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

    alterar(id, nome, tipo, qtd, preco, callback) {
        const query = 'UPDATE Produtos SET nome = ?, tipo = ?, qtd = ?, preco = ? WHERE id = ?';
        db.run(query, [nome, tipo, qtd, preco, id], function(err) {
            if (err) {
                console.log(err);
                callback('Erro ao alterar produto', null);
            } else {
                callback(null, 'Produto alterado com sucesso');
            }
        });
    }

    pesquisarPorNome(nome, callback) {
        const query = 'SELECT * FROM Produtos WHERE nome LIKE ?';
        db.all(query, [nome], (err, rows) => {
            if (err) {
                console.log(err);
                callback('Erro ao buscar produto', null);
            } else {
                callback(null, rows);
            }
        });
    }

    remover(id, callback) {
        const query = 'DELETE FROM Produtos WHERE id = ?';
        db.run(query, [id], function(err) {
            if (err) {
                console.log(err);
                callback('Erro ao remover produto', null);
            } else {
                callback(null, 'Produto removido com sucesso');
            }
        });
    }

    exibir(id, callback) {
        const query = 'SELECT * FROM Produtos WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                console.log(err);
                callback('Erro ao buscar produto', null);
            } else {
                callback(null, row);
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

