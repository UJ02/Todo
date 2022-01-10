const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
});

const TodoList = mongoose.model('TodoList', todoSchema);

module.exports = TodoList;