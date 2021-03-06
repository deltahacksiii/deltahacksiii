const express = require('express');
const queue = require('./views/queue');
const swipe = require('./views/swipe');
const loan = require('./views/loan');
const profile = require('./views/profile');
const home = require('./views/home');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// Ex: GET - http://localhost:3000/
app.get('/', (req, res) => {
	res.send(home('Hello world!'));
});


app.post('/create', (req,res) => {
    var fullname = req.body.fullname
    var amount = req.body.amount
    var photo = req.body.photo
    var industry = req.body.industry
    var interest_rate = req.body.interest_rate
    var duration_days = req.body.duration_days
    var mysql = require('mysql')
    console.log(req.body)
    console.log("****")
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
    var query = 'insert into loans (fullname, amount, photo, industry, interest_rate, duration_days) values ("'+fullname+'","'+amount+'","'+photo+'","'+industry+'","'+interest_rate+'","'+duration_days+'")'
    console.log(query)
    connection.query(query, function (err, rows, fields) {
      if (err) throw err
     
      res.send("<script>window.location.href = './loan/"+encodeURIComponent(fullname)+"'</script>");
    })
    
    connection.end()
    
})

app.post('/bid', (req,res) => {
    var lender_fullname = req.body.lender_fullname
    var lender_email = req.body.lender_email
    var new_interest_rate = req.body.new_interest_rate
    var borrower_fullname = req.body.borrower_fullname
    var mysql = require('mysql')
    console.log(req.body)
    console.log("****")
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
    var query = 'insert into loan_matches (lender_fullname, borrower_fullname, lender_email) values ("'+lender_fullname+'","'+borrower_fullname+'","'+lender_email+'")'
    //consider if record already exists
    query += ' ON DUPLICATE KEY UPDATE lender_fullname="' + lender_fullname + '", lender_email="' + lender_email + '"'
    console.log(query)
    connection.query(query, function (err, rows, fields) {
      if (err) throw err
        
        query = 'update loans set interest_rate='+new_interest_rate+' where fullname="'+borrower_fullname+'"'
        connection.query(query, function (err, rows, fields) {
            if (err) throw err
       
            res.send("<script>window.location.href = './loan/"+encodeURIComponent(borrower_fullname)+"'</script>");
            connection.end()
        })
     
      
    })
    
    
    
})

app.get('/queue', (req, res) => {
    
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

app.get('/swipe', (req, res) => {
    
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
    var rows_string;
    var rows_json;
    var most_recent;
    connection.query('SELECT * from loans', function (err, rows, fields) {
      if (err) throw err
      // get all rows
      // for the sake of the pitch demo, we want the most recently added loan to appear, say, as the 4th card in the stack
      // therefore, we pop it from the array to get the most recent loan, hold onto it, shuffle the array, and slide it back into the 4th spot
      most_recent = rows.pop();
      // shuffle all rows
      rows = shuffle(rows)
      // add most_recent loan into 4th position
      rows.splice(3, 0, most_recent)
      // console.log(rows)
      rows_string = JSON.stringify(rows)
      // rows_json = JSON.parse(rows)
      // console.log(rows_string)
      res.send(swipe(rows_string));
    })

    connection.end()

});

app.get('/profile', (req, res) => {

    // const a = req.query.atest;
    // const b = req.query.btest;
    // var random = Math.floor(Math.random()*rows.length);
	res.send(profile("test"));

});

app.get('/loan/:fullname', (req, res) => {
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
    var best_loan = {}
    connection.query('SELECT * from loans WHERE fullname="'+req.params.fullname+'"', function (err, rows, fields) {
      if (err) throw err
    
      selectedrow['fullname'] = rows[0].fullname
      selectedrow['amount'] = rows[0].amount
      selectedrow['photo'] = rows[0].photo
      selectedrow['industry'] = rows[0].industry
      selectedrow['interest_rate'] = rows[0].interest_rate
      selectedrow['duration_days'] = rows[0].duration_days
    //   console.log(selectedrow)
        connection.query('select * from loans inner join loan_matches on loans.fullname=loan_matches.borrower_fullname where loans.fullname="' + req.params.fullname + '"', function (err, rows, fields){
            if (err) throw err
            if (rows[0] == undefined) {
                best_loan['empty'] = "Nobody has bid for this loan yet."
                best_loan['lender_fullname'] = ""
                best_loan['lender_email'] = ""
            }
            else {
                best_loan['empty'] = ""
                // get info into the best_loan hash
                best_loan['lender_fullname'] = rows[0].lender_fullname + " has the lowest bid!"
                // best_loan[borrower_fullname] = rows[0].borrower_fullname
                best_loan['lender_email'] = " Contact: " + rows[0].lender_email
                // console.log(best_loan)
                
            }
            res.send(loan(selectedrow, best_loan));
            connection.end()
        })
    // res.send(loan(selectedrow, best_loan));
    })
	

});

// thanks http://stackoverflow.com/a/6274381/4926817
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

module.exports = app;
