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

}



module.exports = VendaController;