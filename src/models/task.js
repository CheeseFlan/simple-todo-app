// ===========================================================================
// Model - Responsavel por criar o schema apra ser guardado no banco de dados
// ===========================================================================

const mongoose = require('mongoose') // import do mongoose
const Schema = mongoose.Schema // instanciando o construtor de schema

// Criando o schema
const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  }
},
  {
    timestamp: true
  }
)

// Criando o modelo para ser exportado
const taskModel = mongoose.model('tasks', taskSchema)

module.exports = taskModel // exportando...
