// ====================================================================================
// Controller - Responsavel por fazer as requisições com base o modelo passado para ele
// ====================================================================================

const taskModel = require('../models/task') // importando o modelo do "todo" da pasta models

// Função para buscar todas as tarefas
exports.findAll = function (req, res) {
  taskModel.find({})
    .then(function (data) { return res.status(200).send(data) })
    .catch(function(err) { return res.status(500).send(err)})
}

// função para buscar apenas uma tarefa com base no id
exports.findOne = function (req, res) {
  taskModel.findOne({ _id: req.params.id })
    .then(function (data) { return res.status(200).send(data) })
    .catch(function(err) { return res.status(500).send(err) })
}

// função para criar uma tarefa
exports.create = async function (req, res) {
  taskModel.create(req.body)
    .then(function (data) { return res.status(200).send(data) })
    .catch(function(err) { return res.status(500).send(err)})
}

// função para atualizar uma tarefa com base no id
exports.update = async function (req, res) {
  taskModel.update({ _id: req.params.id }, req.body)
    .then(function (data) { return res.status(200).send(data) })
    .catch(function(err) { return res.status(500).send(err)})
}

// função para remover uma tarefa com base no id
exports.remove = async function (req, res) {
  taskModel.remove({ _id: req.params.id })
    .then(function (data) { return res.status(200).send(data) })
    .catch(function(err) { return res.status(500).send(err)})
}

/*
  Detalhe ao utilizar o exports antes da função permite que essa função
  ja seja importada para todo o modulo que o importar.
*/
