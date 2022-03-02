//Name: Ed Marie May D. Macapagal
//App Name: express-static/server.js
//Description: This program uses a static middleware to start serving the files directly. The image I used in this program can be accessed through the path (http://localhost:5000/images/izone.png)

var express = require("Express");

var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.send("Successfully created the second App!");
});

var server = app.listen(5000, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
});
