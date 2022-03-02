//Name: Ed Marie May D. Macapagal
//App Name: express-post/server.js
//Description: This program uses POST method and body-parser, and the result shows that the URL is http://127.0.0.1:5000/process_post wherein inputted data is not visible in the URL bar

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function(req, res){
    //Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        course: req.body.course,
        age: req.body.age,
        comments: req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log('Server running at http://%s:%s', host, port);
});