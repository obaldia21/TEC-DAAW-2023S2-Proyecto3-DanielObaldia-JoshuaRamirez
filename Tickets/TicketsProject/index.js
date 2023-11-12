
// Importing modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Creating express App
const app = express();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());

// Listening to port 3000
const port = 3000;


// Creating connection to database
const connection = mysql.createConnection({

    host: 'localhost',
    database: 'TicketsCircus',
    user: 'root',
    password: 'password',
})


app.listen(port, () => console.log(`Server running on port ${port}`));

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


