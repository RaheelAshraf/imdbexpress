const express = require('express');
var imdb = require('imdb-node-api');
const port = 3000;

const app = express(); 

app.get('/:id', (req, res) => {
    imdb.searchMovies(req.params.id, function (movies) {
        console.log(movies);
    }, function(error) { 
        console.error(error);
    });
})

app.listen(port, (req, res) => {

    console.log(`app started`); 
})