const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório.'],
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório.'],
    },
    senha: {
        type: String,
        default: null,
    },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    geo: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type:[Number],
            required: true
        },
    },

    dataCadastro: {
        type: Date,
        default: Date.now ,
    }


});

salao.index({ geo: '2dsphere'});

module.exports = mongoose.model('Salao', salao);