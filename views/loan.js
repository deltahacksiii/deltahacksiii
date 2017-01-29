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

module.exports = function(row) {
	return (
    `
    <h1>Loan Status</h1>
    <p><img src='${row.photo}'></p>
    <p>Name: ${row.fullname}</p>
    <p>Amount: $${row.amount}</p>
    <p>Industry: ${row.industry}</p>
    <p><strong>Interest rate: ${row.interest_rate}</strong></p>
    <p>Duration: ${row.duration_days} days</p>
    `
)};

