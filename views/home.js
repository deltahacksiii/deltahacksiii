module.exports = function(testvar) {
	return (

`
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <style>
      @import url('https://fonts.googleapis.com/css?family=Lobster');
      body {
          /*background-color: #eeeeee;*/
          background-image: url('http://i.imgur.com/ktKBpud.jpg');
          background-position: center;
      }
      h1 {
        text-align: center;
        margin: 0 auto;
        font-size: 1500%;
        font-family: 'Lobster', cursive;
        color: #8b8bff;
      }
      a {
        color: #8b8bff;
      }
      .btn-xlarge{
            padding: 72px 112px;
            font-size: 88px;
            line-height: normal;
            -webkit-border-radius: 40px;
            -moz-border-radius: 40px;
            border-radius: 40px;
            box-shadow: 0px 0px 200px #fff;
      }
      .btn-mlarge{
            padding: 36px 66px;
            font-size: 44px;
            line-height: normal;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            box-shadow: 0px 0px 100px #fff;
      }
      div {
          text-align: center;
          margin: 0 auto;
      }
    </style>
    <br><br>
    <h1>lendr</h1>
    <br><br><br><br><br><br><br>
    <div>
    <button class="btn btn-xlarge btn-primary" onclick="location.href='/profile';">Loan $$</button>
    <br><br><br><br><br>
    <button class="btn btn-xlarge btn-primary" onclick="location.href='/swipe';">Lend $$</button>
    <br><br><br><br><br><br>
    <button class="btn btn-mlarge btn-default">Update Profile</button></div>
    </div>

`
)};