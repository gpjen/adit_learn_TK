

const mysql = require('mysql2');

const connectionPoll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wiki_games'
})

module.exports = connectionPoll;