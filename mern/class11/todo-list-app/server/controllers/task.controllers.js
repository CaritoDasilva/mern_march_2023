const Task = require('../models/task.model');

module.exports.getAllTasks = async (req, res) => {
    try {
        const taskList = await Task.find();
        res.json({ tasks: taskList });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido enviar la lista de tareas',
            error,
        });
    }
};

module.exports.createTask = async (req, res) => {
    try {
        console.log("🚀 ~ file: task.controllers.js:18 ~ module.exports.createTask= ~ req.body:", req.body)
        const newTask = await Task.create(req.body);
        res.json({ task: newTask });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido crear la tarea nueva',
            error,
        });
    }
}

module.exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ task: updatedTask });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido actualizar la tarea',
            error,
        });
    }
}

module.exports.deleteTask = async (req, res) => {
    try {
        const response = await Task.deleteOne({ _id: req.params.id });
        res.json({ response });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido eliminar la tarea',
            error,
        });
    }
}

module.exports.getOneTask = async (req, res) => {
    try {
        const oneTask = await Task.findById(req.params.id)
        res.json({ task: oneTask });
    } catch (error) {
        res.status(500).json({
            message: 'No hemos podido encontrar la tarea',
            error,
        });
    }
}
