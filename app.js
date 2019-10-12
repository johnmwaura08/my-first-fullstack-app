var express = require('express');
var app = express();

app.use('/', express.static('files'));

app.listen(3000, function(){
    console.log("Express running on port: 3000");
});