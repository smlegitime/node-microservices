const mockMails = [
    {
        subject: 'Mon premier email',
        receiver: 'test@example.com',
        content: 'Salut tout le monde!'

    },
    {
        subject: 'Dezyem email mwen',
        receiver: 'sybille@legitime.ht',
        content: 'Sak regle menm?'

    },
    {
        subject: 'My third email',
        receiver: 'smlegitime@live.com',
        content: 'This is a legitimate email.'

    },
];

module.exports = { 
    Query: {
        mails: () => mockMails,
        mail: (_, args) => mockMails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;

            return args;
        }
    }
};