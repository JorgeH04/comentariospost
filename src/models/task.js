const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  product: String,
  description: String,
  color: {
    type: String,
    required: true
  },
  talle: {
    type: String,
    required: true
  },
  price: { type: Number },
  likes: { type: Number, default: 0 },
  status: {
    type: Boolean,
    default: false
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('tasks', TaskSchema);