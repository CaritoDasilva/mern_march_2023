const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/task_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('We are making some connections ninjas!'))
    .catch(err => console.log('Somenthing went wrong', err));
