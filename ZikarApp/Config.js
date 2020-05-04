const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'zikar',
    user: 'hamza',
    password: ''
  });

module.exports = { connection };