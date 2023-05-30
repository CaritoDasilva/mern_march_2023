const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./server/config/mongoose.config');
require('dotenv').config()

app.use(cookieParser());
app.use(cors());
app.use( express.json() );
app.use(express.urlencoded({ extended:true }));

const routes = require('./server/routes/task.routes');
require('./server/routes/user.routes')(app);
routes(app);


app.listen(port, () => console.log('We are running our first server, so cool!'))
