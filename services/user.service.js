const db = require("../models");
const User = db.user;

async function getUsers() {
    return await User.findAll({attributes: ['id', 'username']}, {order: [['id', 'ASC']]});
}

async function getUserById(userId) {
    return await User.findByPk(userId, {
        attributes: ['username']
    }).then(user => {
        if (!user) {
            throw new Error('User not found')
        }
        return user;
    })
}

module.exports = {getUsers, getUserById};
