
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.use(express.json());

var todo = require('../models/todo');
mongoose.connect('mongodb://localhost/todo');


var db = mongoose.connection;

db.on('error', function(msg){
    console.log("Mongoose Error db todo:" + msg);
});

db.once('open', function(){
    console.log("Mongoose connected to todo");
});


router.get('/todo/all', function(req,res){
    todo.find({}).exec(function(err,data){
        res.json(data);
    });
});

router.post('/add', function(req,res){

    console.log("===Reqeust Body for /todo/add ===")
    console.log(req.body)
    var newTask = new todo(req.body);
    //fix this line..how do we handle the request info
    //how to get the client to talk to the server and formatted correctly
    newTask.save(function(err,results){
        if(err){
            console.log("Error trying to save document"+ req.body);
            res.status(404);
        }
        else {
        res.status(201).json({
            status: "Task added"
        })
    }
    })
});
module.exports = router;
