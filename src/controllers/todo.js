// ====================================================================================
// Controller - Responsavel por fazer as requisições com base o modelo passado para ele
// ====================================================================================

const todoModel = require('../models/todo') // importando o modelo do "todo" da pasta models

// Função para buscar todas as tarefas
exports.findAll = async (req, res, next) => {
  const todos = await todoModel.find({})
  res.status(200).send(todos)
}

// função para buscar apenas uma tarefa com base no id
exports.findOne = async (req, res, next) => {
  const todo = await todoModel.findOne({ _id: req.params.id })
  res.status(200).send(todo)
}

// função para criar uma tarefa
exports.create = async (req, res, next) => {
  const todo = await todoModel.create(req.body)
  res.status(201).send({ todo, message: 'Task successfully created!' })
}

// função para atualizar uma tarefa com base no id
exports.update = async (req, res, next) => {
  const todo = await todoModel.update({ _id: req.params.id }, req.body)
  res.status(200).send({ todo, message: 'Successfully updated task!' })
}

// função para remover uma tarefa com base no id
exports.remove = async(req, res, next) => {
  const todo = await todoModel.remove({ _id: req.params.id })
  res.status(200).send({ todo, message: 'Task successfully removed!' })
}

/*
  Detalhe ao utilizar o exports antes da função permite que essa função
  ja seja importada para todo o modulo que o importar.
*/
