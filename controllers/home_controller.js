var todolist = [
    {
        task: 'do some',
        dueDate: 'May 2, 2019',
        category: 'work'
    },
    {
        task: 'not to do',
        dueDate: 'June 29, 2021',
        category: 'personal'
    },
    {
        task: 'meeting someone',
        dueDate: 'September 22, 2021',
        category: 'school'
    },
    {
        task: 'hosting',
        dueDate: 'October 21, 2021',
        category: 'others'
    }
];

module.exports.home = function home_controller(req, res){
    res.render('index', {
        title: 'To Do App',
        todolist: todolist,
    });
}