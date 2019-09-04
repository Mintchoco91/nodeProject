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
var redirectURI = encodeURI("http://localhost:3000");
var api_url = "";




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