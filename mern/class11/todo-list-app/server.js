const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
require('./server/config/mongoose.config');

app.use(cors());
app.use( express.json() );
app.use(express.urlencoded({ extended:true }));

const routes = require('./server/routes/task.routes');
routes(app);


app.listen(port, () => console.log('We are running our first server, so cool!'))
