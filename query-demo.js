//Name: Ed Marie May D. Macapagal
//App Name: query-demo.js
//Description: This program uses a .query string parameter which will query anything that is typed into URL bar or address bar, then the console.log() method will display the queried string into the command line.

//http://localhost:8080/?name=Marie&dept=IT&gender=F

const express = require('express')
const app = express ()

app.get('/', (req, res) => {
    console.log(req.query)
});

app.listen(8080)