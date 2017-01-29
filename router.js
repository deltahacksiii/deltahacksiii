const express = require('express');
const router = express.Router();
const queue = require('./views/queue');
const loan = require('./views/loan');
const profile = require('./views/profile');


// Ex: GET - http://localhost:3000/
router.get('/', (req, res) => {
	res.send('Hello world!');
});

router.get('/queue', (req, res) => {
    
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
    var selectedrow = {}
    connection.query('SELECT * from loans', function (err, rows, fields) {
      if (err) throw err
    
      var random = Math.floor(Math.random()*rows.length);
      selectedrow['fullname'] = rows[random].fullname
      selectedrow['amount'] = rows[random].amount
      selectedrow['photo'] = rows[random].photo
      selectedrow['industry'] = rows[random].industry
      selectedrow['interest_rate'] = rows[random].interest_rate
      selectedrow['duration_days'] = rows[random].duration_days
    //   all_rows = rows
      res.send(queue(selectedrow));
    })
    
     // const a = req.query.atest;
    // const b = req.query.btest;
    // var random = Math.floor(Math.random()*rows.length);

    
    
    connection.end()

   

});
router.get('/profile', (req, res) => {

    // const a = req.query.atest;
    // const b = req.query.btest;
    // var random = Math.floor(Math.random()*rows.length);
	res.send(profile("test"));

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
    var selectedrow = {}
    connection.query('SELECT * from loans WHERE fullname="'+req.params.fullname+'"', function (err, rows, fields) {
      if (err) throw err
    
      selectedrow['fullname'] = rows[0].fullname
      selectedrow['amount'] = rows[0].amount
      selectedrow['photo'] = rows[0].photo
      selectedrow['industry'] = rows[0].industry
      selectedrow['interest_rate'] = rows[0].interest_rate
      selectedrow['duration_days'] = rows[0].duration_days
    //   console.log(selectedrow)
    
    // console.log("****")
        console.log(selectedrow)
	    res.send(loan(selectedrow));
    })
	connection.end()

});

module.exports = router;
