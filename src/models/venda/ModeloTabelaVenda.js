const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_venda: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_canal_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    publicidade: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    venda_real: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    id_incidente: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    id_endereco_entrega: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'venda',
    timestamps: false
}

module.exports = instancia.define('venda', colunas, opcoes);
