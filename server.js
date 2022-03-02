//Name: Ed Marie May D. Macapagal
//App Name: server.js
//Description: This program is an express application which uses a GET method, and responds with "Succesfully created the second App!" for requests to the homepage or path ('/').

var express = require("Express");

var app = express();

app.get("/", function(req, res){
    res.send("Successfully created the second App!");
});

var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server is running at http://%s:%s', host, port);
});