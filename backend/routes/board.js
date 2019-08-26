const express = require('express');
const router = express.Router();
var path = require('path');
var Board = require('../models/board');
const movies = require('../data/movie.json');

router.get('/', function(req, res){
    Board.find({}, function (err, boards) {
        console.log(boards);
        res.json(boards);
    });
});

router.get('/boardWrite', function(req, res){
    Board.find({}, function (err, boards) {
        
        res.json(boards);
    });
});
/*
router.get('/:id', function(req, res){
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter(function(movie){
        return movie.id === id;
    });
    res.send(movie);
});
*/

module.exports = router;