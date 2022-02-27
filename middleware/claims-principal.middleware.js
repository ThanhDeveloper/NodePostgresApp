const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUserLoggedId = (req, res) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
        return decoded.userId;
    } catch (error) {
        res.status(401).send('Unauthorized');
    }
}

module.exports = {getUserLoggedId}