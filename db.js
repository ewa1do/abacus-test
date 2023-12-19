const { createPool } = require('mysql2/promise')

exports.DB = createPool({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'test',
  port: 3306,
})
