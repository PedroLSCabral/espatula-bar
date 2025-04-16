const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ingrediente = sequelize.define('Ingrediente', {
    id_ingrediente: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: false
    },
    nome : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    qtd : {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    categoria : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    }
}, {
    tableName: 'ingrediente',
    timestamps: false
});

module.exports = Ingrediente;