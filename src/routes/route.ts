import * as hapi from 'hapi';

const GoalModel = require('./../schemas/GoalModel');

module.exports = {
    'name': 'routePlugin',
    register: async (server: hapi.Server) => {
        server.route({
            method: 'GET',
            path: '/goals',
            handler: async (request: hapi.Request, reply: any) => {
                try {
                    const test = await GoalModel.find().exec();
                    return reply.response(test);
                } catch (error) {
                    return error;
                }
            }
        });
    }
}
