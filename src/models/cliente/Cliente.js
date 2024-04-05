const TabelaCliente =require('./TabelaCliente');

const campos = ['nome', 'tipo_cliente', 'id_documento', 'tipo_documento', 'id_endereco_entrega', 'id_canal_cadastro', 'id_cliente_indicacao'];
let camposInvalidos = [];

class Cliente{
    constructor({ id, nome, tipo_cliente, id_documento, tipo_documento, id_endereco_entrega, id_canal_cadastro, id_cliente_indicacao}) {
        this.id = id;
        this.nome = nome;
        this.tipo_cliente = tipo_cliente;
        this.id_documento = id_documento;
        this.tipo_documento = tipo_documento;
        this.id_endereco_entrega = id_endereco_entrega;
        this.id_canal_cadastro = id_canal_cadastro;
        this.id_cliente_indicacao = id_cliente_indicacao;
    }

    static async listar(){
        const clientes = await TabelaCliente.listar();
        return clientes;
    }

    async listarPorId() {
        const clienteEncontrado = await TabelaCliente.listarPorId(this.id);
        this.nome = clienteEncontrado.nome;
        this.sku = clienteEncontrado.sku;
        this.tipo_cliente = clienteEncontrado.tipo_cliente;
        this.id_documento = clienteEncontrado.id_documento;
        this.tipo_documento = clienteEncontrado.tipo_documento;
        this.id_endereco_entrega = clienteEncontrado.id_endereco_entrega;
        this.id_canal_cadastro = clienteEncontrado.id_canal_cadastro;
        this.id_cliente_indicacao = clienteEncontrado.id_cliente_indicacao;
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
        
        const resultado = await TabelaCliente.inserir({
            nome: this.nome,
            sku: this.sku,
            tipo_cliente: this.tipo_cliente,
            id_documento: this.id_documento,
            tipo_documento: this.tipo_documento,
            id_endereco_entrega: this.id_endereco_entrega,
            id_canal_cadastro: this.id_canal_cadastro,
            id_cliente_indicacao: this.id_cliente_indicacao,
        });
        this.id = resultado.id;
    }

    async atualizar() {
        await TabelaCliente.listarPorId(this.id);

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
        await TabelaCliente.atualizar(this.id, dadosParaAtualizar);
    }

    async remover() {
        return TabelaCliente.remover(this.id);
    }

    validarCampo(campo, valor) {

        //validação de campos string obrigatórios
        if ((campo === 'nome' || campo === 'tipo_cliente' || campo === 'tipo_documento') && 
            (typeof (valor) !== 'string' || valor.length === 0) ) {
                return false;
        }

        //validação de campos string não-obrigatórios
        if (campo === 'tipo_documento' && (typeof (valor) !== 'string' && (valor != null || valor != undefined))){
                return false;
        }

         //validação de campos number obrigatórios
         if (campo === 'id_canal_cadastro' && (typeof (valor) !== 'number')) {
            return false;
        }

        //validação de campos number não-obrigatórios
        if ((campo === 'id_documento' || campo === 'id_endereco_entrega' || campo === 'id_cliente_indicacao') && 
            (typeof (valor) !== 'number' && (valor != null || valor != undefined))){
                return false;
        }

        return true;
    }
    
}

module.exports = Cliente;