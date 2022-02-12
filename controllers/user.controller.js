var userService = require("../services/user.service");
var apiResponse = require("../utils/api-response.util");

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
const getUserById = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const data = await userService.getUserById(userId);
    if (!data) {
      return apiResponse.failed(res, "User not found");
    }
    apiResponse.success(res, data);
  } catch (err) {
    apiResponse.failed(res, err.message);
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    await userService.createUser(name, age);
    res.status(201).send();
  } catch (err) {
    apiResponse.failed(res, err.message);
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const age = req.body.age;
    const user = await userService.getUserById(userId);
    if (!user) {
      return apiResponse.failed(res, "User not found");
    }
    await userService.updateUser(user, age);
    res.status(204).send();
  } catch (err) {
    apiResponse.failed(res, err.message);
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await userService.getUserById(userId);
    if (!user) {
      return apiResponse.failed(res, "User not found");
    }
    await userService.deleteUser(user);
    res.status(204).send();
  } catch (err) {
    apiResponse.failed(res, err.message);
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
