
const Cliente = require('../models/cliente/Cliente.js');

class ClienteController{

    static async listarClientes(req, res){
        try{
            const listaClientes = await Cliente.listar();
            res.status(200).json(listaClientes);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async listarClientesPorId(req, res){
        try{
            const id = req.params.id;
            const cliente = new Cliente({id: id});
            await cliente.listarPorId();

            res.status(200).json(cliente);

        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição`
            });
        }
    }

    static async cadastrarCliente(req, res){
        try{
            const dadosRecebidos = req.body;
            const cliente = new Cliente(dadosRecebidos);
            await cliente.criar();

            res.status(201).json(cliente);
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

    static async atualizarCliente(req, res){
        try{
            const id = req.params.id;
            const dadosRecebidos = req.body;
            const dados = Object.assign({}, dadosRecebidos, {id: id});
            const cliente = new Cliente(dados);

            await cliente.atualizar();
            res.status(204).end();
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }

    }

    static async excluirCliente(req, res){
        try{
            const id = req.params.id;
            const cliente = new Cliente({id: id});
            
            await cliente.listarPorId();
            await cliente.remover();
            
            res.status(204);
            res.end()
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha na requisição` 
            })
        }
    }

}



module.exports = ClienteController;