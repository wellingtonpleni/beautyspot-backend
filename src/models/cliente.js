const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório.'],
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        default: null,
    },
    foto: {
        type: String,
        required: true,
    },    
    dataNascimento: {
        type: String,
        required: true,
    },    
    sexo: {
        type: String,
        enum: ['M', 'F', 'Outro'], 
        required: true,
    },
    status: {
        type: String,
        enum: ['Ativo', 'Inativo'], 
        required: true,
        default: 'Ativo',
    },
    documento :{
        tipo: {
            type: String,
            enum: ['cpf', 'cnpj'],
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },

    },
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now ,
    },


});

module.exports = mongoose.model('Cliente', cliente);