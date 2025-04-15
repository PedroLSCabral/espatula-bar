const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
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
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 18,
            max: 120
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cpf : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
        }
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    torcida: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'cliente',
    timestamps: false
});

module.exports = Cliente;