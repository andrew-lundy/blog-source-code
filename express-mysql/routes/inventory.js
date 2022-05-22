require('dotenv').config();

let express = require('express');
let router = express.Router();
let pool = require('../database').pool;

router.get('/get-inventory', (req, res) => {
    let sql = 'SELECT * FROM inventory';

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('Inventory received via pool.');

            connection.release();
        });
    });
});

module.exports = router;