const mongo = require ("mongoose");

const mongoconnection = require("./config/mongoconnection.json");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var osRouter = require('./routes/os');
var productRouter = require('./routes/product');
var platRouter = require('./routes/plat'); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/os', osRouter);
app.use('/products', productRouter);
app.use('/plats', platRouter);
app.use(function(req, res, next) {
  next(createError(404));
});


console.log("!!1111 code avant la connexion 1111 !! -> CODE111111");

mongo.connect(mongoconnection.url)

 .then(() => {

  console.log("DataBase Connected Pour la clasee 1LAINFO1...!!!!");

 })

 .catch((err) => {

  console.log(err);

 });



 console.log("!!2222 code après la connexion 2222 !! -> CODE22222");
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
