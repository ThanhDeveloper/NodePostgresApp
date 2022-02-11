var db = require('../db')

async function getUsers() {
  const rows = await db.query("SELECT * from d_users", []);
  return rows;
}

module.exports = { getUsers };