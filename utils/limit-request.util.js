var rateLimiter = require('express-rate-limit');

const apiLimiter = (limitTime, maxRequest) => rateLimiter({
    windowMs: limitTime * 60 * 1000, // minutes
    max: maxRequest, //max request 
    message: 'Too many requests, please try again later.',
  })

module.exports = { apiLimiter }