let express = require('express');
let app = express();

let inventory = require('./routes/inventory');
app.use('/inventory', inventory);


module.exports = app;