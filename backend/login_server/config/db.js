const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI.toString())
    .then(() =>
        console.log("MongoDB CONNECTED"))
    .catch((err) => console.log(err));