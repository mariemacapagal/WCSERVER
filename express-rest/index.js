//  Individual Assignment: NodeJS, ExpressJS, Nodemon, API
//  Name: Ed Marie May D. Macapagal
//  App name: express-rest/index.js


const express = require('express');
const app = express();

//  2: Code for the Express Application
app.get('/', (req, res) => {
    res.send('My New App!');
});

//  3: Code for the resource
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

//  4: Single params code
app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
});

//  5: Multi params code
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params);
});

//  6: Query parameter code
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

//  7: Array for the GET Method
const movies =
[{
    id: 1,
    title: 'Superman'},
{
    id: 2,
    title: 'Thor'},
{
    id: 3,
    title: 'Iron Man'}
];

//  8: Code to GET all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

//  9: Code to find specific movie or to GET movie by ID
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

app.use(express.json());

//  10: POST Method to add element or movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(3000, () => console.log('Listening on port 3000'));