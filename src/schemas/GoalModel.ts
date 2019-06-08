const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GoalSchema = new Schema({
    description: String,
    id: Number
});

module.exports = mongoose.model('test', GoalSchema);
