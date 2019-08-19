const express = require('express');
const router = express.Router();
var path = require('path');
//const movies = require('../data/movie.json');

router.get('/', function(req, res){
    console.log("!");
    const testarr = {
        testval3: "테스트값3",
    };
    
    res.renderVue("boardList.vue",{textval1 : '테스트값1', textval2 : '테스트값2', testarr});
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