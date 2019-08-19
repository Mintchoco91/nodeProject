var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// get movie router
//const movieRouter = require('./routes/movie');
const boardRouter = require('./routes/board');

var app = express();

//express-vue선언 
var expressVue = require("express-vue");
const vueOptions = {
    rootPath: path.join(__dirname, 'views')
};
console.log(vueOptions.rootPath);
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);
expressVue.use(app, vueOptions);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

//vue 연결부분 (express-vue하면서 주석처리)
//app.use(express.static(path.join(__dirname, 'public')));

// route
//app.use('/movies', movieRouter);
app.use('/', boardRouter);

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