import * as hapi from 'hapi';

const server = require('./../server');
const GoalModel = require('./../schemas/GoalModel');
const goalRoute = server;

goalRoute.route({
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

export default goalRoute;
