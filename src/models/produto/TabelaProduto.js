const Modelo = require('./ModeloTabelaProduto');

module.exports={
    listar () {
        return Modelo.findAll({raw: true});
    },

    async listarPorId(id){
        const produtoEncontrado = await Modelo.findOne({
            where: {
                id: id
            }
        });
        

        if (!produtoEncontrado){
            throw new Error('produto não encontrado!');
        }

        return produtoEncontrado;
    },

    inserir(produto){
        return Modelo.create(produto);
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
