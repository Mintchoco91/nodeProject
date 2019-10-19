var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//test
// get movie router
//const movieRouter = require('./routes/movie');
var cors = require('cors'); 
const boardRouter = require('./routes/board');
const memberRouter = require('./routes/member');
const apiRouter = require('./routes/api');
var app = express();

/* 쓰려다가 VUE session 으로 교체함. - front에서 쓰는게 불편
//세션_File Store
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true
  //store: new FileStore()
 }));
*/

//naver login
var client_id = '7WdjBQw0JVti0EBOaRwi';
var client_secret = '8dDGGH3_O1';
var state = "http%3A%2F%2Flocalhost%3A3000";
var redirectURI = encodeURI("http%3A%2F%2Flocalhost%3A3000%2F");
var api_url = "";

//naver callback
app.get('/callback', function (req, res) {
  code = req.query.code;
  state = req.query.state;

  api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
   + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state + "&auth_type=reprompt";

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

//naver getInfo
app.get('/member', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/nid/me';
   var request = require('request');
   var token = req.query.token;
   var header = "Bearer " + token; // Bearer 다음에 공백 추가
  
   var options = {
       url: api_url,
       headers: {'Authorization': header}
    };
    
   //req.session.token = token;

   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);

       //[MEMO] 사용하려면 객체에 한번 담아줘야 한다.
       obj = JSON.parse(body);
     
       /* express 식 session처리. 일단안쓰므로 주석처리
       req.session.status = "1";
       req.session.name = obj.response.name;
       req.session.nickname = obj.response.nickname;
       req.session.email = obj.response.email;
      */

       console.log("네이버 정보_app.js : " + body);
     } else {
        //req.session.status = "0";
       console.log('error');
       if(response != null) {
         res.status(response.statusCode).end();
         console.log('error = ' + response.statusCode);
       }
     }
   });
 });

//****************************************************************************** MongoDB 설정부분 (__dirname 로 분기처리)
if(__dirname.includes("C:\\")){ //Local
  var mongoose = require('mongoose');
  var promise = mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true
  });
   
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
      /// we're connected!
      console.log('connected successfully');
  });
}else{ //Server
  var mongoose = require('mongoose');
  // CONNECT TO MONGODB SERVER
  mongoose.connect(process.env.MONGODB_URI); //heroku config 로 확인가능
}

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
//******************************************************************************

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

//CORS 처리
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
  
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
app.use('/members', memberRouter);
app.use('/api', apiRouter);

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