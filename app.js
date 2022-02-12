//import 
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var xss =  require('xss-clean');
var helmet = require('helmet');
var morgan = require('morgan');
var cors = require('cors');

var notFoundMiddleware = require ('./middleware/not-found.middleware')
var errorHandlerMiddleware = require ('./middleware/error-handle.middleware')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user.route');

var limitRequest =  require('./utils/limit-request.util');

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

//use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(xss());
app.use(helmet());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// routers and limit request
app.use('/', indexRouter);
app.use('/api/v1/users', limitRequest.apiLimiter(1, 5), usersRouter);

// middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app;
