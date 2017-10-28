// ==================================================================================
// Route - Responsavel por tratar as rotas que seram acionadas por apps de terceiros
// ==================================================================================

const express = require('express') // import express
const router = express.Router() // instacinado o router
const todoControllers = require('../controllers/todo') // importando o controller
const asyncErrorHandler = require('../../utils/asyncErrorHandler') // função para tratar erros

// Rotas
router.get('/todos', asyncErrorHandler(todoControllers.findAll)) // para buscar todas as tarefas
router.get('/todos/:id', asyncErrorHandler(todoControllers.findOne)) // para buscar penas uma tarefa com base no id
router.post('/todos', asyncErrorHandler(todoControllers.create)) // para criar uma tarefa
router.put('/todos/:id', asyncErrorHandler(todoControllers.update)) // para atulaizar uma tarefa com base no id
router.delete('/todos/:id', asyncErrorHandler(todoControllers.remove)) // para remover uma tarefa com base no id

module.exports = router // exportando as rotas
