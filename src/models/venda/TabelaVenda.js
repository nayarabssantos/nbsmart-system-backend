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
    },

    inserir(venda){
        return Modelo.create(venda);
    },
    
    async atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id}
            }
        );
    }
};
