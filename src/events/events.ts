import { RequestRoute } from 'hapi';

const server_ = require('./../server');
const eventLogger = server_.events;

eventLogger.on('route', (route: RequestRoute) => {
    console.log(`New route added: ${route.path}`);
});

module.exports = eventLogger;
