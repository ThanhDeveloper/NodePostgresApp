const db = require("../models");
const User = db.User;

async function getUsers() {
  const rows = await User.findAll({ order: [['id', 'ASC']] });
  return rows;
}

async function getUserById(userId) {
  const row = await User.findByPk(userId);
  return row;
}

async function createUser(name, age) {
  const row = await User.create({
    name: name,
    age: age,
  }).then(result => {
    return result;
  });
  return row;
}

async function updateUser(user, name, age) {
  await user.update({
    name: name,
    age: age,
  });
}

async function deleteUser(user) {
  await user.destroy();
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
