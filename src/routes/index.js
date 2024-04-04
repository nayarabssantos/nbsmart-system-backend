import express from 'express';
import vendas from './vendasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Bem Vindo ao NB Smart System!!"));

    app.use(express.json(), vendas);
};

export default routes;