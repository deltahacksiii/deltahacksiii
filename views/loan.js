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
    
    <style>
    @import url('https://fonts.googleapis.com/css?family=Lobster');
    </style>
    
    <h1>&nbsp;<a href='/swipe'>back to queue</a></h1>
    <p style="text-align:center;" class="med">Loan Status</p><br>
    <div style="text-align:center; border-top: 10px solid #8b8bff;">
        <p class="med">lendr rating | credit score</p>
        <table><tr><td style="width:40%;">
          <p><img class="contained" src='${row.photo}'></p>
        </td><td>
          <p class="big">${row.fullname}</p>
          <p class="med">Amount: $${row.amount}</p>
          <p class="med">Industry: ${row.industry}</p>
          <p class="med"><strong>Interest rate: ${row.interest_rate}%</strong></p>
          <p class="med">Duration: ${row.duration_days} months</p>
        </td></tr></table>
    </div>
    <br><br><br>
    <div style="text-align:center; margin:0 auto; background-color: #7FBF7F; border: 15px solid #eeeeee; border-radius: 50px;">
        <p class="big">${row2.empty}</p>
        <p class="big">${row2.lender_fullname}${row2.lender_email}</p>
        <p class="med">Make a lower bid!</p><br>
        <input class="big" type="number" placeholder="Lower interest rate" id="bid"><br><br>
        <input class="big" type="text" placeholder="Name" id="name"><br><br>
        <input class="big" type="text" placeholder="Email" id="email"><br><br>
        <button type="button" class="big btn btn-primary" onclick="make_a_bid()">Submit</button><br><br>
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
      body {
        background-color: #eeeeee;
      }
      .contained {
        width: 90%;
        display: block;
        margin: 0 auto;
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
      .big {
        font-size: 500%;
      }
      .med {
        font-size: 300%;
      }
      h1 {
        font-size: 500%;
        font-family: 'Lobster', cursive;
        color: #8b8bff;
      }
      a {
        color: #8b8bff;
      }
    </style>
    `
)};

