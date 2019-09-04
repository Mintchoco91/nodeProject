const express = require('express');
const router = express.Router();
var path = require('path');
var Board = require('../models/board');
const movies = require('../data/movie.json');


router.get('/', function(req, res){

    var client_id = '7WdjBQw0JVti0EBOaRwi';
    var client_secret = '8dDGGH3_O1';
    var state = "hLiDdL2uhPtsftcU";
    var redirectURI = encodeURI("http%3A%2F%2Flocalhost%3A3000%2F");
    var api_url = "";

    code = req.query.code;
    state = req.query.state;
    
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
   
    console.log(api_url);
    
    //이 아래코드 500오류
    /*
   var request = require('request');
   
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };

   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
    });
    */
     

    Board.find({}, function (err, boards) {
        res.json(boards);
    });
});

 
router.get('/boardWritePage/:id', function(req, res){
    console.log(req.url);
    Board.findOne({_id: req.params.id}, function (err, board) {
        res.json(board);
    })
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