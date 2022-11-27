const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',      
        required: true,  
    },
    titulo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number, 
        required: true,
    },
    comissao: {
        type: Number, // % de comissão sobre o preço
        required: true,
    },
    duracao: {
        type: Date, //duracao em min. 
        required: true,
    },
    recorrencia: {
        type: Number, 
        required: true,
    },
    descricao: {
        type: String, 
        required: true,
    },
    status: {
        type: String,
        enum: ['Ativo', 'Inativo', 'Excluido'], 
        required: true,
        default: 'Ativo',
    },
    dataCadastro: {
        type: Date,
        default: Date.now 
    }

});

module.exports = mongoose.model('Servico', servico);
module.exports ={
    Servico: mongoose.model('Servico', servico)
}