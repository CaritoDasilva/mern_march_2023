const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('We are making some connections ninjas!'))
    .catch(err => console.log('Somenthing went wrong', err));
