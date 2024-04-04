const Compra = require('../models/compra/Compra.js');

class CompraController{

    static async listarCompras(req, res){
        try{
            const listaCompras = await Compra.listar();
            res.status(200).json(listaCompras);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async listarComprasPorId(req, res){
        try{
            const id = req.params.id;
            const compra = new Compra({id: id});
            await compra.listarPorId();

            res.status(200).json(compra);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async cadastrarCompra(req, res){
        try{
            const dadosRecebidos = req.body;
            const compra = new Compra(dadosRecebidos);
            console.log (compra)
            await compra.criar();

            res.status(201).json(compra);
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

    static async atualizarCompra(req, res){
        try{
            const id = req.params.id;
            const dadosRecebidos = req.body;
            const dados = Object.assign({}, dadosRecebidos, {id: id});
            const compra = new Compra(dados);

            await compra.atualizar();
            res.status(204).end();
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }

    }

    static async excluirCompra(req, res){
        try{
            const id = req.params.id;
            const compra = new Compra({id: id});
            
            await compra.listarPorId();
            await compra.remover();
            
            res.status(204);
            res.end()
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

}



module.exports = CompraController;