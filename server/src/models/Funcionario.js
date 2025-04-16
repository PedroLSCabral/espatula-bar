const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Funcionario = sequelize.define('Funcionario', {
    id_funcionario: {
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
    salt : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha : {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.senha_bruta = value;
            console.log('Senha bruta:', this.senha_bruta);
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
    hooks: {
        beforeValidate: async (funcionario) => {
            const salt = await bcrypt.genSalt(10);
            funcionario.setDataValue('salt', salt);
            funcionario.setDataValue('senha', await bcrypt.hash(funcionario.senha_bruta, salt));
        }
    },
    tableName: 'funcionario',
    timestamps: false
});

Funcionario.prototype.verificarSenha = async function(senhaInput) {
    return await bcrypt.compare(senhaInput, this.senha);

};

module.exports = Funcionario;