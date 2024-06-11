const dotenv = require('dotenv');
dotenv.config();
require('./config/db');
const app = require('express')();
const port = 3000;
const UserRouter = require('./api/User');
const bodyParser = require('body-parser');
// set the ejs as the veiw engine
app.set('view engine', 'ejs');
app.set('views', '../frontend/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// For accepting form data
app.use('/', UserRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})