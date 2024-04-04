const Modelo = require('./ModeloTabelaCompra');

module.exports={
    listar () {
        return Modelo.findAll({raw: true});
    },

    async listarPorId(id){
        const compraEncontrada = await Modelo.findOne({
            where: {
                id: id
            }
        });
        

        if (!compraEncontrada){
            throw new Error('compra não encontrada!');
        }

        return compraEncontrada;
    },

    inserir(compra){
        return Modelo.create(compra);
    },

    async atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id}
            }
        );
    },

    remover(id){
        return Modelo.destroy({
            where: {id: id}
        });
    }
};
