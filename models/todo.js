var mongoose = require('mongoose');

var tasksSchema = mongoose.Schema({
    task: String
});

var todo = mongoose.model('tasks', tasksSchema);
module.exports =todo;
