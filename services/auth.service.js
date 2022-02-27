const db = require("../models");
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config();

async function signup(username, password) {
    await User.findOne({where: {username: username}}).then(user => {
        if (user) {
            throw new Error('That username is already taken')
        }
        bcrypt.hash(password, 10).then((hash) => {
            User.create({
                username: username,
                password: hash
            });
        });
    })
}

async function login(username, password) {
    let userLogin;
    return await User.findOne({where: {username: username}}).then(user => {
            if (!user) {
                throw new Error('Incorrect username or password')
            }
            userLogin = user;
            return bcrypt.compare(password, user.password);
        }
    ).then(response => {
        if (!response) {
            throw new Error('Incorrect username or password')
        }
        const accessToken = jwt.sign({
            userId: userLogin.id
        }, process.env.SECRET_KEY, {algorithm: 'HS512', expiresIn: "86400"}); // 24 hours
        return {
            userId: userLogin.id,
            username: userLogin.username,
            accessToken: accessToken,
            expiresIn: 86400 //24h
        };
    });
}

module.exports = {signup, login};