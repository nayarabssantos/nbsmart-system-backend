const TabelaVenda = require('../models/venda/TabelaVenda.js');
const Venda = require('../models/venda/Venda.js');

class VendaController{

    static async listarVendas(req, res){
        try{
            const listaVendas = await Venda.listar();
            res.status(200).json(listaVendas);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async listarVendasPorId(req, res){
        try{
            const id = req.params.id;
            const venda = new Venda({id: id});
            await venda.listarPorId();

            res.status(200).json(venda);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async cadastrarVenda(req, res){
        try{
            const dadosRecebidos = req.body;
            const venda = new Venda(dadosRecebidos);
            console.log (venda)
            await venda.criar();

            res.status(201).json(venda);
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

    static async atualizarVenda(req, res){
        try{
            const id = req.params.id;
            const dadosRecebidos = req.body;
            const dados = Object.assign({}, dadosRecebidos, {id: id});
            const venda = new Venda(dados);

            await venda.atualizar();
            res.status(204).end();
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }

    }

    static async excluirVenda(req, res){
        try{
            const id = req.params.id;
            const venda = new Venda({id: id});
            
            await venda.listarPorId();
            await venda.remover();
            
            res.status(204);
            res.end()
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

}



module.exports = VendaController;