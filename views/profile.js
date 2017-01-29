module.exports = function(testvar) {
	return (

`
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<h1>Create Profile</h1>

<p>Name</p>
<input id = "textid" type="text"></input>

<br>

<p>Loan</p>
<input id = "textid2" type="text"></input>

<br>

<p>Interest Rate</p>
<input id = "textid3" type="text"></input>

<br>

<p>Duration</p>
<input id = "textid4" type="text"></input>

<br>

<input id="clickMe" type="button" value="clickme" onclick="doSomething()" />

<script>
function doSomething() { 
name = document.getElementById('textid').value;
loan = document.getElementById('textid2').value;
interestRate = document.getElementById('textid3').value;
duration = document.getElementById('textid4').value;

console.log(name);
console.log(loan);
console.log(interestRate);
console.log(duration);
};


</script>

`




)};