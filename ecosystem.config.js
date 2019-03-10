const path  = require('path');

const basePath = path.join(__dirname, 'packages');

module.exports = {
  apps : [
    {
      name: 'API gateway',
      script: basePath + '/gateway/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
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
    {
      name: 'DB service',
      script: basePath + '/db/server.js',

      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 4001
      }
    }
  ]
};
