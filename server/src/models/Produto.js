const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    id_produto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    qtd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    preco: {
        type: DataTypes.REAL,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0.01
        }
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    tableName: 'produto',
    timestamps: false
});

Produto.associate = (models) => {
    Produto.belongsToMany(models.Ingrediente, {
        through: models.ProdutoIngrediente,
        foreignKey: 'id_produto',
        otherKey: 'id_ingrediente',
        as: 'ingredientes'
    });
}

module.exports = Produto;
