const TabelaCompra =require('./TabelaCompra');

const campos = ['id_fornecedor', 'data_compra', 'valor_total', 'status', 'id_pagamento'];
let camposInvalidos = [];

class Compra{
    constructor({ id, id_fornecedor, data_compra, valor_total, status, id_pagamento }) {
        this.id = id;
        this.id_fornecedor = id_fornecedor;
        this.data_compra = data_compra;
        this.valor_total = valor_total;
        this.status = status;
        this.id_pagamento = id_pagamento;
    }

    static async listar(){
        const compras = await TabelaCompra.listar();
        return compras;
    }

    async listarPorId() {
        const compraEncontrada = await TabelaCompra.listarPorId(this.id);
        this.id_fornecedor = compraEncontrada.id_fornecedor;
        this.data_compra = compraEncontrada.data_compra;
        this.valor_total = compraEncontrada.valor_total;
        this.status = compraEncontrada.status;
        this.id_pagamento = compraEncontrada.id_pagamento;
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
        
        const resultado = await TabelaCompra.inserir({
            id_fornecedor: this.id_fornecedor,
            data_compra: this.data_compra,
            valor_total: this.valor_total,
            status: this.status,
            id_pagamento: this.id_pagamento,
        });
        this.id = resultado.id;
    }

    async atualizar() {
        await TabelaCompra.listarPorId(this.id);

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

        await TabelaCompra.atualizar(this.id, dadosParaAtualizar);
    }

    async remover() {
        return TabelaCompra.remover(this.id);
    }

    validarCampo(campo, valor) {

        //validação campos string obrigatórios
        if ((campo === 'status' || campo === 'data_compra') && (typeof (valor) !== 'string' || valor.length === 0) ) {
            return false;
        }

        //validação de campos number obrigatórios
        if ((campo === 'valor_total' || campo === 'id_fornecedor') && (typeof (valor) !== 'number')) {
            return false;
        }

        //validação de campos number não-obrigatórios
        if (campo === 'id_pagamento' && (typeof (valor) !== 'number' && (valor != null || valor != undefined))){
                return false;
        }

        return true;
    }
    
}

module.exports = Compra;