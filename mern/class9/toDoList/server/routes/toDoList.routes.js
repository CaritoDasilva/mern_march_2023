const { sayHi } = require("../controllers/toDoList.controller")


module.exports = (app) => {
    app.get('/api', sayHi);
}
