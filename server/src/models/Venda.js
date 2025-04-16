const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venda = sequelize.define('Venda', {
    id_venda: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: false
    },
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
    qtd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    id_funcionario: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Funcionario',
            key: 'id_funcionario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    id_cliente: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Cliente',
            key: 'id_cliente'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    total: {
        type: DataTypes.REAL,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0.01
        }
    },
    data_venda: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'venda',
    timestamps: false
});

Venda.associate = (models) => {
    Venda.belongsTo(models.Funcionario, {
        foreignKey: 'id_funcionario',
        as: 'funcionario'
    });
    Venda.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'cliente'
    });
};

module.exports = Venda;