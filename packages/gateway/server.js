const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');

const schema = require('./data/schema');
const { port } = require('./config');

const server = express();

server
.use(bodyParser.json())
.use('/graphql', graphqlExpress({ schema }))
.use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))
.listen(port, () => console.log(`Server is up and listening on port ${ port }`));