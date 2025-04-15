const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
    id_funcionario: {
        type: DataTypes.INTEGER,
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
        validade: {
            isInt: true,
            min: 0,
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
    salt : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha : {
        type: DataTypes.STRING,
        allowNull: false,
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
}, {
    tableName: 'funcionario',
    timestamps: false
});

module.exports = Funcionario;