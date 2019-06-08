const Hapi = require('@hapi/hapi');

// Create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 8081,
    routes: {
        cors: true
    },
});

module.exports = server;
