const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RelatorioVendas = sequelize.define('RelatorioVendas', {
    id_venda: { type: DataTypes.UUID, primaryKey: true },
    nome_produto: DataTypes.STRING,
    nome_cliente: DataTypes.STRING,
    torcida: DataTypes.STRING,
    cidade: DataTypes.STRING,
    qtd: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    data_venda: DataTypes.DATE
  }, {
    tableName: 'vw_relatorio_vendas',
    timestamps: false
});

module.exports = RelatorioVendas;