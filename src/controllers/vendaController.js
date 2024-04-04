const TabelaVenda = require('../models/venda/TabelaVenda.js');
const venda = require('../models/venda/Venda.js');

class VendaController{

    static async listarVendas(req, res){
        try{
            const listaVendas = await venda.listar();
            res.status(200).json(listaVendas);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

}



module.exports = VendaController;