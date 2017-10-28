// ======================================================================================
// app.js => Arquivo principal da aplicação onde fica setado a maioria das configurações.
// ======================================================================================

// Importando os modulos necessarios para aplicação
const express = require('express') // expresss
const mongoose = require('mongoose') // mongoose
const bodyParser = require('body-parser') // body-parser
const morgan = require('morgan') // morgan
const app = express() // instanciando o express
const CORS = require('./utils/cors') // importando o cors
const PORT = process.env.PORT || 3000 // setando a porta tanto para desenvolvimento quanto para produção

// Verifica que se a variavel de ambiente é development ou production
if (app.get('env').trim() === 'development') {
  app.use(morgan('dev'))  // utilização do modulo morgan para gerar logs
}

// Cria a conexão com o banco de dados mongodb que esta alocado no mongoLab
mongoose.connect('mongodb://joao:123@ds123361.mlab.com:23361/todo-api', { useMongoClient: true }, (err, res) => {
  return err ? console.log('Could not connect any database!')
             : console.log('The database has been successfully connected!')
})

// Troca o Promise do mongoose que foi depreciado pelo global.Promise do nodeJs
mongoose.Promise = global.Promise

// Setando os middlewares
app.use(bodyParser.urlencoded({ extended: true })) // bodyParser para parsear os requests e responses
app.use(bodyParser.json()) // bodyParser para parsear os requests e responses

// Setando o cors para api
app.use(CORS)

// Rota default
app.get('/', (req, res) => res.send('Hello there!!!'))

// Rota principal da API
app.use('/api', require('./src/routes/todo'))

// middleware para tratamento de erros
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ ERROR: err.message })
})

// Subindo servidor do nodeJs
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
