const Modelo = require('./ModeloTabelaVenda');

module.exports={
    listar () {
        return Modelo.findAll({raw: true});
    },
    async listarPorId(id){
        const vendaEncontrada = await Modelo.findOne({
            where: {
                id: id
            }
        });
        

        if (!vendaEncontrada){
            throw new Error('venda não encontrada!');
        }

        return vendaEncontrada;
    }
};
