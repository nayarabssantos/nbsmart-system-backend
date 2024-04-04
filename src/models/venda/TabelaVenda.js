const Modelo = require('./ModeloTabelaVenda');

module.exports={
    listar () {
        return Modelo.findAll({raw: true});
    }
};
