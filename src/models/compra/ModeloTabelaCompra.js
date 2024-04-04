const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    id_fornecedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_compra: {
        type: Sequelize.DATE,
        allowNull: false
    },
    valor_total: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'compra',
    timestamps: false
}

module.exports = instancia.define('compra', colunas, opcoes);
