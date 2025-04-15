const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { gerarSalt, hashSenha } = require('../utils/authUtils');

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
        set(value) {
            const salt = gerarSalt(); // Gera o salt
            this.setDataValue('salt', salt); // Armazena o salt
            this.setDataValue('senha', hashSenha(value, salt)); // Armazena o hash da senha
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
}, {
    tableName: 'funcionario',
    timestamps: false
});

Cliente.prototype.verificarSenha = async function(senhaInput) {
    return await bcrypt.compare(senhaInput, this.senha);

module.exports = Funcionario;