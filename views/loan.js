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

// connection.query('SELECT * from loans WHERE fullname='+req.params.fullname, function (err, rows, fields) {
//   if (err) throw err

//   console.log(rows[0])
// })




// connection.end()

module.exports = function(row, row2) {
	return (
    `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <h1 style="text-align:center; margin:0 auto;">Loan Status</h1><br>
    <div style="text-align:center; margin:0 auto;">
        <p><img class="contained" src='${row.photo}'></p>
        <p>Name: ${row.fullname}</p>
        <p>Amount: $${row.amount}</p>
        <p>Industry: ${row.industry}</p>
        <p><strong>Interest rate: ${row.interest_rate}%</strong></p>
        <p>Duration: ${row.duration_days} days</p>
    </div>
    <hr>
    <div style="text-align:center; margin:0 auto;">
        <h3>${row2.empty}</h3>
        <h3>${row2.lender_fullname}${row2.lender_email}</h3>
        <p>Make a lower bid! <input type="text" placeholder="New interest rate" id="bid"><input type="text" placeholder="name" id="name"><input type="text" placeholder="email" id="email"><input type="button" value="submit" onclick="make_a_bid()"></p>
    </div>
    
    <script>
        function make_a_bid(){
            lender_fullname = $('#name').value.replace(/ /g,"%20");
            lender_email = $('#email');
            // borrower_fullname = "${row.fullname}"
            url = location.href + "/bid?lender_fullname="+lender_fullname+"&lender_email="+lender_email+"&borrower_fullname="+borrower_fullname
            console.log(url)
            // window.location = "./thankyou"
        }
    </script>
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

