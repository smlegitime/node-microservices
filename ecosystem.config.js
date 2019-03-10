const path  = require('path');

const basePath = path.join(__dirname, 'packages');

module.exports = {
  apps : [
    // API GATEWAY
    {
      name: 'API gateway',
      script: basePath + '/gateway/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
        SERVICE_DB_PORT: 4001,
        Q_URI: 'amqp://gewbmjdw:a6FYSFwjSDGykHm3EuvNCEdt2hnkXuMj@moose.rmq.cloudamqp.com/gewbmjdw'
      }
    },

    // DB SERVICE
    {
      name: 'DB service',
      script: basePath + '/db/server.js',

      instances: 1,
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 4001
      }
    },

    // MAILING  SERVICE
    {
      name: 'Mailing service',
      script: basePath + '/mailing_service/index.js',

      instances: 1,
      watch: true,
      env: {
        NODE_ENV: 'development',
        MJ_API_PUBLIC: '09319157f755631f6a2fe1567e35de62',
        MJ_API_SECRET: '05f01ae01f768b73b85a47172ef6c5e5',
        Q_URI: 'amqp://gewbmjdw:a6FYSFwjSDGykHm3EuvNCEdt2hnkXuMj@moose.rmq.cloudamqp.com/gewbmjdw'
      }
    },
  ]
};
