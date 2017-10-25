const todoModel = require('../models/todo')

exports.findAll = async (req, res, next) => {
  const todos = await todoModel.find({})
  res.status(200).send(todos)
}

exports.findOne = async (req, res, next) => {
  const todo = await todoModel.findOne({ _id: req.params.id })
  res.status(200).send(todo)
}

exports.create = async (req, res, next) => {
  const todo = await todoModel.create(req.body)
  res.status(201).send({ todo, message: 'Task successfully created!' })
}

exports.update = async (req, res, next) => {
  const todo = await todoModel.update({ _id: req.params.id }, req.body)
  res.status(200).send({ todo, message: 'Successfully updated task!' })
}

exports.remove = async(req, res, next) => {
  const todo = await todoModel.remove({ _id: req.params.id })
  res.status(200).send({ todo, message: 'Task successfully removed!' })
}
