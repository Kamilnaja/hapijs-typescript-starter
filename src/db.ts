const Mongoose = require('mongoose');
const mongoHref = 'mongodb://localhost/test';
Mongoose.connect(mongoHref, { useNewUrlParser: true })
    .then(() => console.log('Connected to db'))
    .catch((err: Error) => console.log('error while connecting : ' + err));

module.exports = Mongoose;
