module.exports = function(testvar) {
	return (

`
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!DOCTYPE html>
<html>
<head>
  <title>Enter your profile</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  body {
      position: relative; 
  }
  #section1 {padding-top:50px;height:500px;color: #000; background-color: #1E88E5;max-height: 200px;}
  #section2 {padding-top:50px;height:500px;color: #000; background-color: #673ab7;max-height: 200px;}
  #section3 {padding-top:50px;height:500px;color: #000; background-color: #ff9800;max-height: 200px;}
  #section4 {padding-top:50px;height:500px;color: #000; background-color: #00bcd4;max-height: 200px;}
  #section5 {padding-top:50px;height:500px;color: #000; background-color: #009688;max-height: 200px;}
  #section6 {padding-top:50px;height:500px;color: #000; background-color: #7bf24f;max-height: 200px;}
  #section7 {padding-top:50px;height:500px;color: #000; background-color: #f3fc41;max-height: 200px;}
  </style>
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Create Profile</a>
    </div>
    <div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
          <li><a href="#section4">Section 4</a></li>
          <li><a href="#section5">Section 5</a></li>
          <li><a href="#section6">Section 6</a></li>
          <li><a href="#section7">Section 7</a></li>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>    

<div id="section1" class="container-fluid">
  <h1>Name</h1>
  <input id = "textid" type="text"></input>
</div>
<div id="section2" class="container-fluid">
  <h1>Loan</h1>
  <p>How much money do you need to borrow?</p>
  <input id = "textid2" type="text"></input>
</div>
<div id="section3" class="container-fluid">
  <h1>Interest Rate</h1>
    <p>What's the lowest interest rate you've been offered outside of Lendr?</p>
    <input id = "textid3" type="text"></input>
</div>
<div id="section4" class="container-fluid">
  <h1>Duration</h1>
  <p>How many days do you need until you can pay back this loan?</p>
  <input id = "textid4" type="text"></input>
</div>
<div id="section5" class="container-fluid">
  <h1>Industry</h1>
  <p>What industry will this loan be put to use in?</p>
  <input id = "textid5" type="text"></input>
</div>
<div id="section6" class="container-fluid">
  <h1>Profile picture</h1>
<div style="height:0px;overflow:hidden">
   <input type="file" id="fileInput" name="fileInput" />
</div>
<button type="button" onclick="chooseFile();">choose file</button>

<script>
   function chooseFile() {
      document.getElementById("fileInput").click();
   }
</script>
</div>
<div id="section7" class="container-fluid">
<h1>Confirm</h1>
  <input id="clickMe" type="button" value="clickme" onclick="doSomething()" />
</div>
  <form style="display: hidden" action="./create" method="POST" id="form">
    <input type="hidden" id="var1" name="fullname" value=""/>
    <input type="hidden" id="var2" name="amount" value=""/>
    <input type="hidden" id="var3" name="photo" value=""/>
    <input type="hidden" id="var4" name="industry" value=""/>
    <input type="hidden" id="var5" name="interest_rate" value=""/>
    <input type="hidden" id="var6" name="duration_days" value=""/>
  </form>
</body>
</html>


<script>
function doSomething() { 
  name = document.getElementById('textid').value;
  loan = document.getElementById('textid2').value;
  interestRate = document.getElementById('textid3').value;
  duration = document.getElementById('textid4').value;
  industry = document.getElementById('textid5').value;
  picture = document.getElementById('fileInput').value;
  var photo = "http://i.imgur.com/xtOa350.png"
  
  console.log(name);
  console.log(loan);
  console.log(interestRate);
  console.log(duration);
  console.log(industry);
  console.log(picture);
  
  
  
  // thank you http://stackoverflow.com/a/9252533/4926817
  $("#var1").val(name);
  $("#var2").val(loan);
  $("#var3").val(photo);
  $("#var4").val(industry);
  $("#var5").val(interestRate);
  $("#var6").val(duration);
  
  $("#form").submit();

  // url = './create?fullname=' + name + '&amount=' + loan + '&photo="http://i.imgur.com/xtOa350.png"&industry=' + industry + '&interest_rate=' + interestRate + '&duration_days=' + duration
  // url = encodeURI(url);
  // console.log(url)
  // //basically redirect the page with all these parameters
  // window.location = url
  // lol this didn't work. see above for form instead
};
</script>

`




)};