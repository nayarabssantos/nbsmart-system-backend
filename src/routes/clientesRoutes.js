const express = require('express');
const ClienteController = require('../controllers/clienteController.js');

const routes = express.Router();

routes.get('/clientes/', ClienteController.listarClientes);

routes.get('/clientes/:id', ClienteController.listarClientesPorId);

routes.post("/clientes/", ClienteController.cadastrarCliente);

routes.put("/clientes/:id", ClienteController.atualizarCliente);

routes.delete("/clientes/:id", ClienteController.excluirCliente);

module.exports = routes;