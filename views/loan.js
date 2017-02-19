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
    
    <h4><a href='/queue'>Back to queue</a></h4>
    <h1 style="text-align:center; margin:0 auto;">Loan Status</h1><br>
    <div style="text-align:center; margin:0 auto;">
        <p><img class="contained" src='${row.photo}'></p>
        <h4>Name: ${row.fullname}</h4>
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
        <form style="display: hidden" action="/bid" method="POST" id="form">
          <input type="hidden" id="var1" name="lender_fullname" value=""/>
          <input type="hidden" id="var2" name="lender_email" value=""/>
          <input type="hidden" id="var3" name="new_interest_rate" value=""/>
          <input type="hidden" id="var4" name="borrower_fullname" value=""/>
        </form>
    </div>
    
    <script>
        function make_a_bid(){
            lender_fullname = $('#name')[0].value
            lender_email = $('#email')[0].value;
            new_interest_rate = $('#bid')[0].value
            borrower_fullname = "${row.fullname}"
            // url = location.href + "/bid?lender_fullname="+lender_fullname+"&lender_email="+lender_email+"&borrower_fullname="+borrower_fullname
            $("#var1").val(lender_fullname);
            $("#var2").val(lender_email);
            $("#var3").val(new_interest_rate);
            $("#var4").val(borrower_fullname);
            $("#form").submit();
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

