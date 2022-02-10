var db = require('../db')

async function getUsers() {
  const rows = await db.query("SELECT * from d_userss", []);
  return rows;
}

module.exports = { getUsers };