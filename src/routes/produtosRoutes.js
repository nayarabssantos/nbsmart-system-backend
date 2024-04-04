const express = require('express');
const ProdutoController = require('../controllers/produtoController.js');

const routes = express.Router();

routes.get('/produtos/', ProdutoController.listarProdutos);

routes.get('/produtos/:id', ProdutoController.listarProdutosPorId);

routes.post("/produtos/", ProdutoController.cadastrarProduto);

routes.put("/produtos/:id", ProdutoController.atualizarProduto);

routes.delete("/produtos/:id", ProdutoController.excluirProduto);

module.exports = routes;