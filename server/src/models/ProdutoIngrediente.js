const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProdutoIngrediente = sequelize.define('ProdutoIngrediente', {
    id_produto: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Produto',
            key: 'id_produto'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    id_ingrediente: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Ingrediente',
            key: 'id_ingrediente'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    qtd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    }
}, {
    tableName: 'produto_ingrediente',
    timestamps: false
});

ProdutoIngrediente.associate = (models) => {
    ProdutoIngrediente.belongsTo(models.Produto, {
        foreignKey: 'id_produto',
        as: 'produto'
    });
    ProdutoIngrediente.belongsTo(models.Ingrediente, {
        foreignKey: 'id_ingrediente',
        as: 'ingrediente'
    });
}

module.exports = ProdutoIngrediente;