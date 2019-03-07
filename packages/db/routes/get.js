const mongoose = require('mongoose');

const Mail = mongoose.model('Mail');

module.exports = server => {

    const pingHandler = (_, res) => {
        res.send('Healthy Database Service');
    };

    const mailHandler = async (_, res) => {
        let mails;
        let error;

        try {
            mails = await Mail.find();
        } catch (err) {
            error = err;
        }

        res.send({
            message: 'Got response from DB service',
            service: 'db',
            status: 200,
            payload: mails || error
        });
    };

    const singleMailHandler = async (req, res) => {
        let id = req.params.id;
        let mail;
        let error;

        try {
            mail = await Mail.findById(id);
        } catch (err) {
            error = err;
        }

        res.send({
            message: 'Got response from DB service',
            service: 'db',
            status: 200,
            payload: mail || error
        });
    };

    server
    .get('/', pingHandler)
    .get('/mails', mailHandler)
    .get('/mails/:id', singleMailHandler);
}