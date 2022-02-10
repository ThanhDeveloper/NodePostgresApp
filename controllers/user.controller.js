var user = require("../models/user.model");
var userService = require("../services/user.service");
var apiResponse = require("../utils/api-response.util")

//get all users
const getUsers = async (req, res) => {
  try {
    const data = await userService.getUsers();
    apiResponse.success(res, data);
  } catch (err) {
    apiResponse.failed(res, err.message);
  }
};

//get user by id
const getUserById = function (req, res) {
  const { id: userId } = req.params;
  res.send(`respond user id ${userId}`);
};

// create user
const createUser = function (req, res) {
  res.status(201).send("user created");
};

// update user
const updateUser = function (req, res) {
  const { id: userId } = req.params;
  res.status(204).send(`user id ${userId} updated`);
};

// delete user
const deleteUser = function (req, res) {
  const { id: userId } = req.params;
  res.status(204).send(`user id ${userId} deleted`);
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
