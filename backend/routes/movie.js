const express = require('express');
const router = express.Router();
var path = require('path');
const movies = require('../data/movie.json');

router.get('/', function(req, res){
    //render, send, sendFile
    console.log("movie");
    //res.send(movies);
    //res.json({test : 'testtt'});
    res.json(movies);
    //res.render('index', { title: 'Express' });
    //res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

router.get('/:id', function(req, res){
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter(function(movie){
        return movie.id === id;
    });
    res.send(movie);
});

module.exports = router;