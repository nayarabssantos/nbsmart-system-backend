const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    sku: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ncm: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    ean: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produto',
    timestamps: false
}

module.exports = instancia.define('produto', colunas, opcoes);
