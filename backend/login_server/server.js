const dotenv = require('dotenv');
dotenv.config();
require('./config/db');
const app = require('express')();
const port = 3000;
const UserRouter = require('./api/User');

// set the ejs as the veiw engine
app.set('view engine', 'ejs');
app.set('views', '../frontend/views');



// For accepting form data
const bodyParser = require('express').json;
app.use(bodyParser());
app.use('/', UserRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})