const db = require('../config/mongoose');
const TodoList = require('../models/todo');

module.exports.home = function home_controller(req, res){
    TodoList.find({}, function(err, todo){
        if(err){
            console.log('Error in fetching data from database');
            return;
        }
        return res.render('index',{
            title: 'To Do List',
            todolist: todo
        });
    });
}

module.exports.create = function creat(req, res){
    TodoList.create({
        task: req.body.task,
        dueDate: req.body.date,
        category: req.body.category
    },function(err, newlist){
        if(err){
            console.log('Error in pushing to database');
            return;
        }
        res.redirect('back');
    })   
}