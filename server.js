const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// MongoDB URI 
// from keys.js
const db = require('./config/keys').mongoURI;

// Connect to Mongo
// Promise Based needs .then and .catch statements
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items); // anything that goes to /api/items/ should refer to the 'items' variable above

// Run our Server
// process.env.PORT is for Heroku
// port 5000 is our fallback
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

