// Função para tratar os erros que possam ser gerados pelas funções assincronas
const asyncErrorHandler = fn => (req, res, next) => {
  const todo = fn(req, res, next)
  if (todo.catch()) {
    todo.catch(err => next(err))
  }
}

module.exports = asyncErrorHandler
