var User = require('../models/user');

//get all users
const getUsers = function(req, res) {
    res.send('respond user list');
};

//get user by id
const getUserById = function(req, res) {
    const { id: userId } = req.params
    res.send(`respond user id ${userId}`);
};

// create user
const createtUser = function(req, res) {
    res.status(201).send('user created');
};

// update user
const updatetUser = function(req, res) {
    const { id: userId } = req.params
    res.status(204).send(`user id ${userId} updated`);
};

// delete user
const deletetUser = function(req, res) {
    const { id: userId } = req.params
    res.status(204).send(`user id ${userId} deleted`);
};
module.exports = { getUsers, getUserById, createtUser, updatetUser, deletetUser }