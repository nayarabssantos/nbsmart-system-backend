
const Produto = require('../models/produto/Produto.js');

class ProdutoController{

    static async listarProdutos(req, res){
        try{
            const listaProdutos = await Produto.listar();
            res.status(200).json(listaProdutos);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async listarProdutosPorId(req, res){
        try{
            const id = req.params.id;
            const produto = new Produto({id: id});
            await produto.listarPorId();

            res.status(200).json(produto);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async cadastrarProduto(req, res){
        try{
            const dadosRecebidos = req.body;
            const produto = new Produto(dadosRecebidos);
            console.log (produto)
            await produto.criar();

            res.status(201).json(produto);
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

    static async atualizarProduto(req, res){
        try{
            const id = req.params.id;
            const dadosRecebidos = req.body;
            const dados = Object.assign({}, dadosRecebidos, {id: id});
            const produto = new Produto(dados);

            await produto.atualizar();
            res.status(204).end();
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }

    }

    static async excluirProduto(req, res){
        try{
            const id = req.params.id;
            const produto = new Produto({id: id});
            
            await produto.listarPorId();
            await produto.remover();
            
            res.status(204);
            res.end()
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

}



module.exports = ProdutoController;