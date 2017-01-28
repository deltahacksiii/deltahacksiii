const express = require('express');
const router = express.Router();
const queue = require('./views/queue');
const laon = require('./views/loan');


// Ex: GET - http://localhost:3000/
router.get('/', (req, res) => {
	res.send('Hello world!');
});

router.get('/profile', (req, res) => {
    // const a = req.query.atest;
    // const b = req.query.btest;
    // var random = Math.floor(Math.random()*rows.length);
	res.send(queue("test"));
});

router.get('/loan/:fullname', (req, res) => {
    const fullname = req.params.fullname;
	var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: process.env.IP,
      user: 'noamhacker',
      password: '',
      database: 'c9'
    })
    var all_rows;
    connection.connect()
    var random_loan;
    
    connection.query('SELECT * from loans WHERE fullname='+req.params.fullname, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows[0])
    })
    connection.end()
	res.send(queue(fullname));
});

module.exports = router;
