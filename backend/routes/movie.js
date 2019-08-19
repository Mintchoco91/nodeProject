const express = require('express');
const router = express.Router();
var path = require('path');
const movies = require('../data/movie.json');

router.get('/', function(req, res){
    //render, send, sendFile
    //res.json({textvals : '가나다라마바사'});
    res.json(movies);
});

router.get('/:id', function(req, res){
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter(function(movie){
        return movie.id === id;
    });
    res.send(movie);
});

module.exports = router;