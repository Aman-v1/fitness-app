const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { notFound, globalErrHandler } = require('./Middlewares/globalErrHandler');

const app = express();
const exerciseRoutes = require('./Routes/exerciseRoutes');
const programRoutes = require('./Routes/programRoutes');
dotenv.config();
const { Connection } = require('./config/db');

const Port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
app.use('/api/exercise', exerciseRoutes);
app.use('/api/program', programRoutes);

/**
 * Home page of the server.
 * @route {GET} /
 */
app.get('/', (req, res) => {
  res.status(200).json('working HomePage');
});

//err middleware
app.use(notFound);
app.use(globalErrHandler);

// Set up database connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

// Start server

app.listen(Port, () => {
  console.log('Server running on port ' + Port + ' Successfully.....');
});
