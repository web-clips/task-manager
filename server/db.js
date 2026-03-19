const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  port: 5432,
  password: "postgres",
});

module.exports = pool;
