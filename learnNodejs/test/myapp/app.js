var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
const userRouter = require('./routes/userRouter')
const User = require('./models/users')
const mongoose = require('mongoose');


mongoose
  .connect('mongodb://127.0.0.1:27017/repeat',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{console.log('Connected to MongoDB')})
  .catch(err=>console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user',userRouter)

app.get('/',(req,res)=>{
  User.find({},(err,users)=>{
    err?console.error(err):res.render('user',{users})
  })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
