//Name: Ed Marie May D. Macapagal
//App Name: routing-demo.js
//Description: This program uses a GET method to request data from a specific resource, and a POST method to to send data to a server to create/update a resource.

var express = require('express');
var app = express();

//This responds a GET request for the homepage
app.get('/', function (req, res){
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET Method');
});

//This responds a POST request for the homepage
app.post('/', function (req, res){
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
});

//This responds a GET request for the list_user page
app.get('/list_user', function (req, res){
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
});

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
});

//new content
//This responds a GET request for the about page
app.get('/about', function (req, res){
    console.log("Got a GET request for /about");
    res.send('This is the "About Us" Page');
});

//This responds a GET request for the contact page
app.get('/contact', function (req, res){
    console.log("Got a GET request for /contact");
    res.send('This is the "Contact Us" Page');
});

var server = app.listen(4000, 'localhost', function (){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
});