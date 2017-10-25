const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://joao:123@ds123361.mlab.com:23361/todo-api', { useMongoClient: true }, (err, res) => {
  return err ? console.log('Could not connect any database!')
             : console.log('The database has been successfully connected!')
})

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello there!!!'))

app.use('/api', require('./src/routes/todo'))

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ ERROR: err.message })
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
