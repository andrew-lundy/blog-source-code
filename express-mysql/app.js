let express = require('express');
let app = express();

let inventory = require('./routes/inventory');

app.use('/inventory', inventory);








// let connection = require('./database.js').databaseConnection;
// // let connection = database.databaseConnection;

// app.get('/inventory', (req, res) => {
//   let sql = 'SELECT * FROM inventory';

//   connection.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Inventory received');
//   });
// });

module.exports = app;