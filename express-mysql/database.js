require('dotenv').config();

let mysql = require('mysql2');

var pool = mysql.createPool({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER, 
    password : process.env.DATABASE_PASSWORD, 
    database : process.env.DATABASE_NAME,
    connectionLimit : 15,
});

exports.pool = pool;

// To use a single database connection.
// let connection = mysql.createConnection({
//     host     : process.env.DATABASE_HOST,
//     user     : process.env.DATABASE_USER, 
//     password : process.env.DATABASE_PASSWORD, 
//     database : process.env.DATABASE_NAME
// });

// exports.databaseConnection = connection;