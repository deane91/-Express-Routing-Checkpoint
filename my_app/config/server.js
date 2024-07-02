const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
4

// Set EJS as the template engine
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, '../../public')));

// Import routes
const homeRoutes = require('../routes/homeRoutes');
const servicesRoutes = require('../routes/servicesRoutes');
const contactRoutes = require('../routes/contactRoutes');

// Use routes
app.use('/', homeRoutes);
app.use('/services', servicesRoutes);
app.use('/contact', contactRoutes);

module.exports = app;
