const amqp = require('amqplib/channel_api');

const q = 'test_q';
let channel;

amqp.connect('amqp://gewbmjdw:a6FYSFwjSDGykHm3EuvNCEdt2hnkXuMj@moose.rmq.cloudamqp.com/gewbmjdw')
.then(conn => conn.createChannel())
.then(ch => { 
    return ch.assertQueue(q, { durable: true })
    .then(ok => ch.sendToQueue(q, Buffer.from('Hello RabbitMQ')))
})
.catch(err => { throw new Error(err) });