const express = require('express');

// Initializing app as an express application
const app = express();

// Setting up ejs as view engine
app.set('view engine', 'ejs');

// Using routes
app.use('/', require('./routes/index'));

// Initializing static files
app.use(express.static('public'));

// Listening to port
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
