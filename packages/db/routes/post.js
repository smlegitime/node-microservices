const mongoose = require('mongoose');

const Mail = mongoose.model('Mail');

module.exports = server => {

    const mailHandler = async ({ body: { subject, receiver, content } }, res) => {
        let mail;
        let error;
        
        if (!subject || !receiver || !content) {
            res.status(400).send({
                message: 'You forgot some stuff, there',
                service: 'db',
                status: 400,
                payload: null
            });
        }

        const newMail = new Mail({
            subject,
            receiver,
            content
        });
        
        try {
            mail = await newMail.save();
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
    .post('/mails', mailHandler);
};