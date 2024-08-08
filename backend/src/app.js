const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);



// middlewares
app.use(cors());
app.use(express.json());

// routes
// app.get('/users', (req, res) => res.send('USERS ROUTES'));
// app.get('/notes', (req, res) => res.send('NOTES ROUTES'));
app.use('/socios', require('./routes/sociosRts') );
app.use('/clases', require('./routes/clasesRts'));


module.exports = app;