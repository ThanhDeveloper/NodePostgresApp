//import
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const xss = require("xss-clean");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const notFoundMiddleware = require("./middleware/not-found.middleware");
const errorHandlerMiddleware = require("./middleware/error-handle.middleware");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user.route");
const authRouter = require('./routes/auth.route');

const limitRequest = require("./utils/limit-request.util");

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

//use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(xss());
app.use(helmet());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers and limit request
app.use("/", indexRouter);
app.use("/api/v1/users", limitRequest.apiLimiter(1, 100), usersRouter);
app.use('/api/v1/auth', authRouter);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
