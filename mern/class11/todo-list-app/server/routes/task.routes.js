const { getAllTasks, createTask, updateTask, deleteTask, getOneTask } = require("../controllers/task.controllers");


module.exports = (app) => {
    app.get('/api/task', getAllTasks);
    app.get('/api/task/:id', getOneTask);
    app.post('/api/task', createTask);
    app.put('/api/task/:id', updateTask);
    app.delete('/api/task/:id', deleteTask);
}
