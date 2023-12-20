const { createPool } = require('mysql2/promise')
require('dotenv').config({ path: __dirname + '/.env' })

const { DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } = process.env

exports.DB = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD || '',
  database: 'abacustest',
  port: DB_PORT || 3306,
})
