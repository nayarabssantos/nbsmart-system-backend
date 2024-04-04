const TabelaProduto =require('./TabelaProduto');

const campos = ['sku', 'cor', 'status', 'descricao', 'ncm', 'ean', 'marca', 'modelo'];
let camposInvalidos = [];

class Produto{
    constructor({ id, sku, cor, status, descricao, ncm, ean, marca, modelo}) {
        this.id = id;
        this.sku = sku;
        this.cor = cor;
        this.status = status;
        this.descricao = descricao;
        this.ncm = ncm;
        this.ean = ean;
        this.marca = marca;
        this.modelo = modelo;
    }

    static async listar(){
        const produtos = await TabelaProduto.listar();
        return produtos;
    }

    async listarPorId() {
        const produtoEncontrado = await TabelaProduto.listarPorId(this.id);
        this.sku = produtoEncontrado.sku;
        this.cor = produtoEncontrado.cor;
        this.status = produtoEncontrado.status;
        this.descricao = produtoEncontrado.descricao;
        this.ncm = produtoEncontrado.ncm;
        this.ean = produtoEncontrado.ean;
        this.marca = produtoEncontrado.marca;
        this.modelo = produtoEncontrado.modelo;
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
        
        const resultado = await TabelaProduto.inserir({
            sku: this.sku,
            cor: this.cor,
            status: this.status,
            descricao: this.descricao,
            ncm: this.ncm,
            ean: this.ean,
            marca: this.marca,
            modelo: this.modelo
        });
        this.id = resultado.id;
    }

    async atualizar() {
        await TabelaProduto.listarPorId(this.id);

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

        await TabelaProduto.atualizar(this.id, dadosParaAtualizar);
    }

    async remover() {
        return TabelaProduto.remover(this.id);
    }

    validarCampo(campo, valor) {

        //validação de campos string obrigatórios
        if ((campo === 'status' || campo === 'sku' || campo === 'descricao' || campo === 'marca' || campo === 'modelo') && 
            (typeof (valor) !== 'string' || valor.length === 0) ) {
                return false;
        }

        //validação de campos string não-obrigatórios
        if (campo === 'cor' && (typeof (valor) !== 'string' && (valor != null || valor != undefined))){
                return false;
        }

        //validação de campos number não-obrigatórios
        if ((campo === 'ncm' || campo === 'ean') && (typeof (valor) !== 'number' && (valor != null || valor != undefined))){
            return false;
        }

        return true;
    }
    
}

module.exports = Produto;