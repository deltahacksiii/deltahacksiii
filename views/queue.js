// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: process.env.IP,
//   user: 'noamhacker',
//   password: '',
//   database: 'c9'
// })
// var all_rows;
// connection.connect()
// var random_loan;

// connection.query('SELECT * from loans', function (err, rows, fields) {
//   if (err) throw err

//   var random = Math.floor(Math.random()*rows.length);
//   random_loan = rows[random]
//   all_rows = rows
// })




// connection.end()

module.exports = function(row) {
	return (
    `
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <div class="row"> 
      <br><h1 class="middle">Lend to me?</h1><br>
      <h4 class="middle">Swipe right if you'd lend to ${row.fullname} with a lower intereset rate than ${row.interest_rate}%!</h4>
    </div>
    <hr>
    <div class="row">  
      <div class="col-lg-4 col-sm-4 middle">
        <a href="./queue">Swipe left :(<br><br><br>
        <img src="http://www.pd4pic.com/images800_/back-flat-icon-left-right-blue-symbol-arrow.png" class="contained">
      </a></div>
      <div class="col-lg-4 col-sm-4 card middle">
        
        <p><img class='contained' src='${row.photo}'></p>
        <p><h3>${row.fullname}</h3></p>
        <p><strong>Amount: $${row.amount}</strong></p>
        <p>Industry: ${row.industry}</p>
        <p><strong>Interest rate: ${row.interest_rate}%</strong></p>
        <p>Duration: ${row.duration_days} days</p>
      </div>
      <div class="col-lg-4 col-sm-4 middle"><a href="./loan/${row.fullname}">Swipe right <3<br><br><br>
        <img src="http://teamdsd.com/genesis/wp-content/themes/optimizePressTheme/lib/assets/images/arrows/arrows-3-red-left.png" class="contained">
      </a></div>
    </div>
    
    
    <style>
      .contained {
        max-width: 150px;
        max-height: 150px;
        min-width: 150px;
        min-height: 150px;
      }
      .card {
        border: 2px solid black;
        padding: 30 px;
        padding-top: 30 px;
      }
      .middle {
        text-align: center;
        margin: 0 auto;
      }
    </style>
    
    `
)};

