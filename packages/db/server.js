const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config')
const { port } = config;

const server = express();

server.use(bodyParser.json());

// Establish mongo connection via mongoose
require('./utils')(config);

// DATABASE ROUTES
require('./routes/get')(server);
require('./routes/post')(server);

server.listen(port, () => console.log(`Server is up and listening on port ${ port }`));