//Name: Ed Marie May D. Macapagal
//App Name: express-get/server.js
//Description: This program uses GET method and the result shows that the queried strings are displayed in the URL

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        course: req.query.course,
        age: req.query.age,
        comments: req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
});