var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// get movie router
//const movieRouter = require('./routes/movie');
const boardRouter = require('./routes/board');

var app = express();
//naver login
var client_id = '7WdjBQw0JVti0EBOaRwi';
var client_secret = '8dDGGH3_O1';
var state = "http%3A%2F%2Flocalhost%3A3000";
var redirectURI = encodeURI("http%3A%2F%2Flocalhost%3A3000%2F");
var api_url = "";

app.get('/callback', function (req, res) {
    code = req.query.code;
    state = req.query.state;

    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
 
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
  });

// mongodb setup
var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true
});
 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected successfully');
});

//express-vue선언 
/*
var expressVue = require("express-vue");
const vueOptions = {
    rootPath: path.join(__dirname, 'views')
};
console.log(vueOptions.rootPath);
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);
expressVue.use(app, vueOptions);
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());



//vue 연결부분 (express-vue하면서 주석처리)
app.use(express.static(path.join(__dirname, 'public')));

// route (*use시 /가아니라 이름을다르게준다.)
app.use('/boards', boardRouter);
//app.use('/movies', movieRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;