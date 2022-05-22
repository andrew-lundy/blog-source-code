let express = require('express');
let app = express();

let inventory = require('./routes/inventory');
app.use('/inventory', inventory);

 // 1. Require the connection to the database.
 var connection = require('./database').databaseConnection;
    
 // 2. Make the GET request.
 app.get('/inventory', (req, res) => {
     let sql = 'SELECT * FROM inventory';
     
     connection.query(sql, (err, result) => {
         if(err) throw  err;
         console.log(result);
         res.send('Inventory received');
     });
 });

module.exports = app;