let express = require('express');
let router = express.Router();

let connection = require('../database').databaseConnection;

router.get('/get-inventory', (req, res) => {
    let sql = 'SELECT * FROM inventory';

    connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Inventory received via Router');
  });
});

module.exports = router;