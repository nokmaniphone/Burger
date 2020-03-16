const { createConnection } = require('mysql2')

let connection

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
} else {
  connection = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '55610096',
    database: 'burgers_db'
  })
}

module.exports = connection