const express =require('express');
const vendas =require('./vendasRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Bem Vindo ao NB Smart System!!"));

    app.use(express.json(), vendas);
};

module.exports = routes;