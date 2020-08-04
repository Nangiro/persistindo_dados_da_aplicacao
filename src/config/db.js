const { Pool } = require("pg")

module.exports = new Pool({
  user: 'fernandokira',
  password: "",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})