import express from 'express';

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Bem Vindo ao NB Smart System!!"));

    app.use(express.json());
};

export default routes;