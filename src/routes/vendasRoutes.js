const express = require('express');
const VendaController = require('../controllers/vendaController.js');

const routes = express.Router();

routes.get('/vendas/', VendaController.listarVendas);

module.exports = routes;