require("dotenv").config();

const db_config = {
  development: {
    username: process.env.DEVELOPMENT_PG_DATABASE_USERNAME,
    password: process.env.DEVELOPMENT_PG_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_PG_DATABASE,
    host: process.env.DEVELOPMENT_PG_DATABASE_HOST,
    dialect: "postgresql",
  },
  test: {
    username: process.env.TEST_PG_DATABASE_USERNAME,
    password: process.env.TEST_PG_DATABASE_PASSWORD,
    database: process.env.TEST_PG_DATABASE,
    host: process.env.TEST_PG_DATABASE_HOST,
    dialect: "postgresql",
  },
  production: {
    username: process.env.PRODUCTION_PG_DATABASE,
    password: process.env.PRODUCTION_PG_DATABASE_PASSWORD,
    database: process.env.PRODUCTION_PG_DATABASE,
    host: process.env.PRODUCTION_PG_DATABASE_HOST,
    dialect: "postgresql",
  },
};

module.exports = { db_config };
