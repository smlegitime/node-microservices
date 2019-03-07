const mongoose = require('mongoose');

const MailSchema = require('./models/Mail');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI, { useNewUrlParser: true });

    mongoose.model('Mail', MailSchema);
};