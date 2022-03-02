//Name: Ed Marie May D. Macapagal
//App Name: firstapp.js
//Description: This program is a simple node express application which uses a GET method, and responds with "Hello World!" for requests to the homepage or path ('/').

var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
});

app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
});