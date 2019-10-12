
var express = require('express');
var router = express.Router();

router.get('/todo/all', function(req,res){
    todo.find({}).exec(function(err,data){
        res.json(data);
    });
});

module.exports = router;
