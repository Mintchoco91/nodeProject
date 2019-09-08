const express = require('express');
const router = express.Router();
var path = require('path');
const movies = require('../data/movie.json');

router.get('/memberLoginPage', function(req, res){
    res.json(movies);
});

router.get('/memberJoinPage', function(req, res){
    res.json(movies);
  });

module.exports = router;