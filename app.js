//import 
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var xss =  require('xss-clean');
var helmet = require('helmet');
var morgan = require('morgan');

var notFoundMiddleware = require ('./middleware/not-found')
var errorHandlerMiddleware = require ('./middleware/error-handle')

var indexRouter = require('./routes/indexRoute');
var usersRouter = require('./routes/usersRoute');

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

//use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(xss());
app.use(helmet());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app;
