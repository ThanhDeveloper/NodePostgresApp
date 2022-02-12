const db = require("../models");
const User = db.User;

async function getUsers() {
  const rows = await User.findAll();
  return rows;
}

async function getUserById(userId) {
  const row = await User.findByPk(userId);
  return row;
}

async function createUser(name, age) {
  await User.create({
    name : name,
    age : age,
  });
}

async function updateUser(user, age) {
  await user.update({
    age : age,
  });
}

async function deleteUser(age) {
  await user.destroy();
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
