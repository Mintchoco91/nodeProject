const express = require('express');
const router = express.Router();
var path = require('path');
var Board = require('../models/board');
//const movies = require('../data/movie.json');


router.get('/', function(req, res){
    Board.find({}, function (err, boards) {
        res.json(boards);
    });
});

 
router.get('/boardWritePage/:id', function(req, res){
    console.log(req.url);

    var board = new Board();
    board.title = "";
    board.contents = "";
    board.author = "";

    if(req.params.id == "new"){
        res.json(board);
    }
    else{
        Board.findOne({_id: req.params.id}, function (err, board) {
            //board.author = "@@";
            res.json(board);
        })
    }
    
});


router.post('/boardWrite', function(req, res){
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;
   
    board.save(function (err) {
      if(err){
        console.log(err);
        res.redirect('/');
      }
      res.redirect('/');
    });
});

router.get('/boardDetailPage/:id', function(req, res){
    Board.findOne({_id: req.params.id}, function (err, board) {
        res.json(board);
    })
});

router.get('/boardDelete/:id', function(req, res){
    Board.deleteOne({_id: req.params.id}, function (err, board){
        if(err){
            console.log(err);
            res.redirect('/');
          }
          res.redirect('/');
      })  
});

router.post('/boardUpdate/:id', function(req, res){
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;

    Board.findOneAndUpdate({_id : req.params.id},{$set: {title : board.title, contents : board.contents, author: board.author}}, function (err, board) {
        if(err){
            console.log(err);
            res.redirect('/');
        }
        res.redirect('/');        
    });
});

module.exports = router;