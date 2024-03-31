const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');

dotenv.config();

// Initializing app as an express application
const app = express();

// Setting up ejs as view engine
app.set('view engine', 'ejs');

// Using routes
app.use('/', require('./routes/index'));
app.use('/recipes', require('./routes/recipes'));
app.use('/search', require('./routes/search'));

// Initializing static files
app.use(express.static('public'));

// Listening to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Exporting the app for testing purposes
module.exports = app;
