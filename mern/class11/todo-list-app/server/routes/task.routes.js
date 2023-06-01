const { authenticate } = require("../config/jwt.config");
const { getAllTasks, createTask, updateTask, deleteTask, getOneTask } = require("../controllers/task.controllers");


module.exports = (app) => {
    app.get('/api/task',/* authenticate */ getAllTasks);
    app.get('/api/task/:id'/* , authenticate */, getOneTask);
    app.post('/api/task'/* , authenticate */, createTask);
    app.put('/api/task/:id'/* , authenticate */, updateTask);
    app.delete('/api/task/:id'/* , authenticate */, deleteTask);
}
