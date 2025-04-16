const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./Cliente');
const Funcionario = require('./Funcionario');

const Produto = require('./Produto');
const Ingrediente = require('./Ingrediente');
const ProdutoIngrediente = require('./ProdutoIngrediente');

const Venda = require('./Venda');

const models = {
    Cliente,
    Funcionario,
    Produto,
    Ingrediente,
    ProdutoIngrediente,
    Venda
};

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
}
);

module.exports = {
    sequelize,
    Sequelize,
    ...models
}
