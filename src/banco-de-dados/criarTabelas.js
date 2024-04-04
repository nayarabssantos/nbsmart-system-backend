const ModeloTabela = require('../rotas/venda/ModeloTabelaVenda');

ModeloTabela
    .sync()
    .then( () => console.log('Tabela criada com sucesso'));
