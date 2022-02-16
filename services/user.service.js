const db = require("../models");
const user = db.user;

async function getUsers() {
  const rows = await user.findAll({ order: [['id', 'ASC']] });
  return rows;
}

async function getUserById(userId) {
  const row = await user.findByPk(userId);
  return row;
}

async function createUser(name, age) {
  const row = await user.create({
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
