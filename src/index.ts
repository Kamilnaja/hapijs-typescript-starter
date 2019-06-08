const mongojs = require('mongojs');
const _server = require('./server');
const GoalModel = require('./schemas/GoalModel');
const db = require('./db');
const emitter = require('./events/events');
const route = require('./routes/route');

const start = async function () {
    try {
        await _server.register({
            plugin: require('hapi-cors'),
            options: {
                origins: ['*'],
                methods: ['POST, GET, OPTIONS', 'DELETE']
            }
        });
        await _server.start();
    } catch (err) {
        console.log(err);
    }
};

start();
