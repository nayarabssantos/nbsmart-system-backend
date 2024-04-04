const TabelaVenda =require('./TabelaVenda');

const campos = ['id_cliente', 'data_venda', 'valor_total', 'status', 'id_canal_venda', 'id_pagamento', 'publicidade', 'venda_real', 'id_incidente', 'id_endereco_entrega'];
let camposInvalidos = [];

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

    async listarPorId() {
        const vendaEncontrada = await TabelaVenda.listarPorId(this.id);
        this.id_cliente = vendaEncontrada.id_cliente;
        this.data_venda = vendaEncontrada.data_venda;
        this.valor_total = vendaEncontrada.valor_total;
        this.status = vendaEncontrada.status;
        this.id_canal_venda = vendaEncontrada.id_canal_venda;
        this.id_pagamento = vendaEncontrada.id_pagamento;
        this.publicidade = vendaEncontrada.publicidade;
        this.venda_real = vendaEncontrada.venda_real;
        this.id_incidente = vendaEncontrada.id_incidente;
        this.id_endereco_entrega = vendaEncontrada.id_endereco_entrega;
    }

    async criar() {

        camposInvalidos = [];
        campos.forEach((campo) => {
            const valor = this[campo];
            if (!this.validarCampo(campo, valor)){
                camposInvalidos.push(campo);
            }
        });
        if (camposInvalidos.length> 0){
            throw new Error('campos Invalidos');
        }
        
        const resultado = await TabelaVenda.inserir({
            id_cliente: this.id_cliente,
            data_venda: this.data_venda,
            valor_total: this.valor_total,
            status: this.status,
            id_canal_venda: this.id_canal_venda,
            id_pagamento: this.id_pagamento,
            publicidade: this.publicidade,
            venda_real: this.venda_real,
            id_incidente: this.id_incidente,
            id_endereco_entrega: this.id_endereco_entrega
        });
        this.id = resultado.id;
    }

    async atualizar() {
        await TabelaVenda.listarPorId(this.id);

        const dadosParaAtualizar = {};
        camposInvalidos = [];

        campos.forEach((campo) => {
            const valor = this[campo];
            if (!this.validarCampo(campo, valor)){
                camposInvalidos.push(campo);
            }else{
                dadosParaAtualizar[campo] = valor;
            }
        });
        if (camposInvalidos.length> 0){
            throw new Error('campos Invalidos');
        }

        await TabelaVenda.atualizar(this.id, dadosParaAtualizar);
    }

    async remover() {
        return TabelaVenda.remover(this.id);
    }

    validarCampo(campo, valor) {

        //validação campos string obrigatórios
        if ((campo === 'status' || campo === 'data_venda') && (typeof (valor) !== 'string' || valor.length === 0) ) {
            return false;
        }

        //validação de campos number obrigatórios
        if ((campo === 'valor_total' || campo === 'id_cliente' || campo === 'id_canal_venda') && (typeof (valor) !== 'number')) {
            return false;
        }

        //validação de campos number não-obrigatórios
        if ((campo === 'id_pagamento' || campo === 'id_incidente' || campo === 'id_endereco_entrega') && 
            (typeof (valor) !== 'number' && (valor != null || valor != undefined))){
                return false;
        }

        //validação de campos boolean obrigatórios
        if ((campo === 'publicidade' || campo === 'venda_real') && (typeof (valor) !== 'boolean')) {
            return false;
        }

        return true;
    }
    
}

module.exports = Venda;