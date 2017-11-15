// ==================================================================================
// Route - Responsavel por tratar as rotas que seram acionadas por apps de terceiros
// ==================================================================================

const express = require('express') // import express
const router = express.Router() // instacinado o router
const taskControllers = require('../controllers/task') // importando o controller

// Rotas
router.get('/tasks', taskControllers.findAll) // para buscar todas as tarefas
router.get('/tasks/:id', taskControllers.findOne) // para buscar penas uma tarefa com base no id
router.post('/tasks', taskControllers.create) // para criar uma tarefa
router.put('/tasks/:id', taskControllers.update) // para atulaizar uma tarefa com base no id
router.delete('/tasks/:id', taskControllers.remove) // para remover uma tarefa com base no id

module.exports = router // exportando as rotas
