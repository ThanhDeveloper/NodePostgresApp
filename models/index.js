//import 
require('dotenv').config();
const Sequelize  = require("sequelize");
const configJson = require ('../config/config');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
const config = configJson.db_config[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

//init
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//test connection
sequelize.authenticate();
console.log('Connection has been established successfully.');

//context
db.User = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = db;
