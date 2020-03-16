const { createConnection } = require('mysql2')

let connection

if (process.env.JAWSDB_URL) {
  connection = createConnection({
    host: 'dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'mscwkxrvvllta834',
    password: 'hgyp7znxkwwyinz8',
    database: 't4obwitho491zc4s'
  })
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