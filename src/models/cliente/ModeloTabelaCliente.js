const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_documento: {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    tipo_documento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    id_endereco_entrega: {
        type: Sequelize.NUMBER,
        allowNull: true,
    },
    id_canal_cadastro: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_cliente_indicacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'cliente',
    timestamps: false
}

module.exports = instancia.define('cliente', colunas, opcoes);
