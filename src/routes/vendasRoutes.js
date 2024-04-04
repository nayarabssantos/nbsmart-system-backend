const express = require('express');
const VendaController = require('../controllers/vendaController.js');

const routes = express.Router();

routes.get('/vendas/', VendaController.listarVendas);

routes.get('/vendas/:id', VendaController.listarVendasPorId);

routes.post("/vendas/", VendaController.cadastrarVenda);

module.exports = routes;