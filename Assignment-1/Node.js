var http = require('http');
var displayRoot = require('./rootModule')
var displayAbout = require('./aboutModule');
var displayContact = require('./contactModule')

var server = http.createServer(function (req, res) {
    if (req.url == '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>Welcome to my Node.js Application</h3></body></html>' + displayRoot);
        res.end();
    }

    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the About Page</h3></body></html>' + displayAbout);
        res.end();
    }

    else if (req.url == "/contact") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the Contact Page</h3></body></html>' + displayContact);
        res.end();
    }

    else if (req.url == "/gallery") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the Gallery Page</h3></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!')
});

server.listen(5000);
console.log('NodeJS web server at port 5000 is running...')

//Macapagal, Ed Marie May D.
//February 1, 2022
//WD-201