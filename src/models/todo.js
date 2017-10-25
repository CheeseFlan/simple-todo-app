const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  }
},
  {
    timestamp: true
  }
)

module.exports = mongoose.model('todos', todoSchema)
