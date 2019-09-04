'use strict';

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// init app
const app = express();


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/'));
app.use('/user', require('./routes/user'));
app.use('/blog', require('./routes/blog'));

// port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Sever started on port ${PORT}`));