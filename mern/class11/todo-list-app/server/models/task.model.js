const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un título para la tarea.'],
        minlength: [3, 'Una tarea debe tener al menos 3 caracteres']
    }, 
    description: {
        type: String,
        required: [true, 'Debe ingresar un título para la tarea.'],
        minlength: [5, 'la descripcion debe tener al menos 5 caracteres']
    },
    status: {
        type: String,
        default: 'Pendiente'
    },
    date_task: {
        type: Date,
    }
}, { timestamps: true });

const Task = model('Task', TaskSchema);

module.exports = Task;
