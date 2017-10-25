const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todo')
const asyncErrorHandler = require('../../utils/asyncErrorHandler')

router.get('/todos', asyncErrorHandler(todoControllers.findAll))
router.get('/todos/:id', asyncErrorHandler(todoControllers.findOne))
router.post('/todos', asyncErrorHandler(todoControllers.create))
router.put('/todos/:id', asyncErrorHandler(todoControllers.update))
router.delete('/todos/:id', asyncErrorHandler(todoControllers.remove))

module.exports = router
