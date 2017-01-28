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

connection.query('SELECT * from loans', function (err, rows, fields) {
  if (err) throw err

  var random = Math.floor(Math.random()*rows.length);
  random_loan = rows[random]
  all_rows = rows
})




connection.end()

module.exports = function(testvar) {
	return (
    `
    <h1>hello world</h1>
    <p>${JSON.stringify(all_rows)}</p>
    `
)};

