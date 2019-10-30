const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();



// express makes public folder content publicly accessible
app.use(express.static('public'));

// require our html route module from routes-html.js (use node buil-in path module)
require('./routes/route-html')(app);

var PORT = 5050;

app.listen( PORT, () => { 
    console.log(`Server is listening for requests....`)
});