const { mailjet: { apiPublic, apiSecret } } = require('../config');
const Mailjet = require('node-mailjet').connect(apiPublic, apiSecret);

console.log(Mailjet);

module.exports = async mail => {
    const req = await Mailjet.post('send').request({
        FromEmail: 'smlegitime@live.com',
        FromName: 'Sybille Legitime',
        Subject: mail.subject,
        'Text-part': mail.content,
        Recipients: [
            {
                Email: mail.receiver
            }
        ]
    });

    console.log(req.body);
};

