const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// require mongo db connection module to connect to database
const mongodbConnection = require('./config/db_connect');

// Configure middleware
// Use morgan logger for logging requests
// app.use(logger("dev")); // should include dev
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// express makes public folder content publicly accessible
app.use(express.static('public'));

// require our html and api route modules (use node built-in path module)
require('./routes/route-html')(app);
require('./routes/route-api')(app);

var PORT = 5050;

app.listen( PORT, () => { 
    console.log(` + Server is listening for requests....`)
});