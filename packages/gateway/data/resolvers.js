const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');

const { pushToMessageQ } = require('../q/connect');

const hostName = 'http://localhost'
const databaseURL = `${ hostName }:${ port }`;

// Generic function to perform REST requests from the client
const get = async path => (await axios.get(`${ databaseURL }/${ path }`)).data.payload;
const post = async (path, body) => (await axios.post(`${ databaseURL }/${ path }`, { ...body })).data.payload;

module.exports = { 
    Query: {
        mails: () => get('mails'),
        mail: (_, { id }) => get(`mails/${ id }`)
    },
    Mutation: {
        mail: (_, args) => {
            let result;
            let error;

            try {
                result = post('mails', args)
            } catch (err) {
                error = err;
            }

            pushToMessageQ(JSON.stringify(args));

            return result || error;
        }
    }
};