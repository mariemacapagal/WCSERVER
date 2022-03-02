//Name: Ed Marie May D. Macapagal
//App Name: express-upload/server.js
//Description: This program has method attribute set to POST and type attribute is set to multipart/form-data. It has a multer setup to act as middleware in uploading files. Error handling is also part of the code because images are the only files allowed to be uploaded, so the files that are not images will result to error uploading file. Uploaded images can be seen on the 'uploads' folder.

var express = require("express")
var multer = require('multer')
var path = require('path')

var app = express()

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		callback(null, file.originalname)
	}
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post('/uploaded', function(req, res) {
	var upload = multer({
		storage: storage,
		fileFilter: function(req, file, callback) {
			var ext = path.extname(file.originalname)
			if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
				return callback(res.end('Error uploading file. Only images are allowed.'), null)
			}
			callback(null, true)
		}
    }).single('myfile');
    
	upload(req, res, function(err) {
		res.end('File is uploaded successfully!')
	});
});

app.listen(2000, function() {
	console.log('Server is running on port 2000')
});