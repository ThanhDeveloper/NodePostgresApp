const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorized = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];
        jwt.verify(accessToken, process.env.SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).send('Unauthorized');
    }
}

module.exports = { authorized }