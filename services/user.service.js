const db = require("../models");
const User = db.user;

async function getUsers() {
  const rows = await user.findAll({ order: [['id', 'ASC']] });
  return rows;
}

async function getUserById(userId) {
  const row = await User.findByPk(userId);
  if (!row) {
    throw new Error("User not found");
  }
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
  const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error('User not found');
  }
  await user.update({
    name: name,
    age: age,
  });
}

async function deleteUser(userId) {
  const userExist = await userService.getUserById(userId);
  if (!userExist) {
    throw new Error(res, "User not found");
  }
  await user.destroy();
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
