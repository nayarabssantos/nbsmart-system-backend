const express = require('express');
const vendas = require('./vendasRoutes.js');
const produtos = require('./produtosRoutes.js');
const compras = require('./comprasRoutes.js');
const clientes = require('./clientesRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Bem Vindo ao NB Smart System!!"));

    app.use(express.json(), vendas, produtos, compras, clientes);
};

module.exports = routes;