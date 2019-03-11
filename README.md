# node-microservices
Mailing app back-end architected using microservices

### The application has a monorepo structure with 3 packages: API gateway, Database service, Mailing service
- The API gateway uses GraphQL and GraphiQL as a client interface, which interacts with the other services
- The database services uses Express and Mongoose (MongoDB) to store the mails
- The mailing service consumes the mails posted to a queue (RabbitMQ) and sends those payloads through the SMTP protocol (Mailjet)

##### To start the processes with PM2 use `pm2 start ecosystem.config.js` at the root of the directory.
