const express = require('express');
const router = express.Router();
var path = require('path');

//API 
router.get('/', function(req, res){
    res.json("heroku 통신성공!");
});

module.exports = router;