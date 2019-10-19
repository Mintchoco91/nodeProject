const express = require('express');
const router = express.Router();
var path = require('path');

//CORS해결해야한다.
router.get('/', function(req, res){
    res.json("통신성공!");
});

module.exports = router;