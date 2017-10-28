// ===========================================================================
// Model - Responsavel por criar o schema apra ser guardado no banco de dados
// ===========================================================================

const mongoose = require('mongoose') // import do mongoose
const Schema = mongoose.Schema // instanciando o construtor de schema

// Criando o schema
const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  }
},
  {
    timestamp: true
  }
)

// Criando o modelo para ser exportado
const todoModel = mongoose.model('todos', todoSchema)

module.exports = todoModel // exportando...
