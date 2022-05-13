require('dotenv').config();

let express = require('express');
let router = express.Router();
let mysql = require('mysql2');

router.get('/get-inventory', (req, res) => {
    let sql = 'SELECT * FROM inventory';

    var connection = mysql.createConnection({
        host     : process.env.DATABASE_HOST,
        user     : process.env.DATABASE_USER, 
        password : process.env.DATABASE_PASSWORD, 
        database : process.env.DATABASE_NAME
    });

    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log("My SQL Connected via a new open connection.");
        res.send('Inventory received via Router');
    });

    connection.end((err => {
        if(err) throw err;
        console.log("Connection closed.");
    }));
});

module.exports = router;




    // connection.connect((err => {
    //     if(err) throw err;
    //     console.log("My SQL Connected via a new open connection.");
    // }));