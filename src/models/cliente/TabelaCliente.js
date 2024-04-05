const Modelo = require('./ModeloTabelaCliente');

module.exports={
    listar () {
        return Modelo.findAll({raw: true});
    },

    async listarPorId(id){
        const clienteEncontrado = await Modelo.findOne({
            where: {
                id: id
            }
        });
        

        if (!clienteEncontrado){
            throw new Error('cliente não encontrado!');
        }

        return clienteEncontrado;
    },

    inserir(cliente){
        return Modelo.create(cliente);
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
