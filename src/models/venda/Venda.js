const TabelaVenda =require('./TabelaVenda');

class Venda{
    constructor({ id, id_cliente, data_venda, valor_total, status, id_canal_venda, id_pagamento, publicidade, venda_real, id_incidente, id_endereco_entrega }) {
        this.id = id;
        this.id_cliente = id_cliente;
        this.data_venda = data_venda;
        this.valor_total = valor_total;
        this.status = status;
        this.id_canal_venda = id_canal_venda;
        this.id_pagamento = id_pagamento;
        this.publicidade = publicidade;
        this.venda_real = venda_real;
        this.id_incidente = id_incidente;
        this.id_endereco_entrega = id_endereco_entrega;
    }

    static async listar(){
        const vendas = await TabelaVenda.listar();
        return vendas;
    }
    
}

module.exports = Venda;