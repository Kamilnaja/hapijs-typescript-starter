import { RequestRoute } from 'hapi';
import * as hapi from 'hapi';

module.exports = {
    'name': 'logger',
    register: async (server: hapi.Server) => {
        server.events.on('route', (route: RequestRoute) => {
            console.log(`New route added: ${route.path}`);
        });
    }
}