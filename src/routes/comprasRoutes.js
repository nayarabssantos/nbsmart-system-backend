const express = require('express');
const CompraController = require('../controllers/compraController.js');

const routes = express.Router();

routes.get('/compras/', CompraController.listarCompras);

routes.get('/compras/:id', CompraController.listarComprasPorId);

routes.post("/compras/", CompraController.cadastrarCompra);

routes.put("/compras/:id", CompraController.atualizarCompra);

routes.delete("/compras/:id", CompraController.excluirCompra);

module.exports = routes;