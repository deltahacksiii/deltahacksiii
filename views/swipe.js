module.exports = function(rows) {
	return (
    `
    <script>rows = JSON.parse('${rows}');</script>

    <!-- jQuery library -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    
    <!-- using https://github.com/do-web/jTinder -->
    
    <!-- transform2d lib -->
    <script type="text/javascript" src="js/jquery.transform2d.js"></script>

    <!-- jTinder lib -->
    <script type="text/javascript" src="js/jquery.jTinder.js"></script>
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="css/jTinder.css">
    
    <style>
    @import url('https://fonts.googleapis.com/css?family=Lobster');
    </style>
    
    <h1>lendr</h1>
    <h2>Swipe to match with a loaner!</h2>
    
    <div class="row">
        <div class="col-lg-3 col-sm-12"></div>
        <div class="col-lg-6 col-sm-12">
            <div class="wrap">
                <div id="tinderslide">
                    <ul>
                        <!-- make this dynamic!!! -->
                        <li class="pane1"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname1"></span><br><span class="med"><span id="amount1"></span><br><span id="industry1"></span><br><span id="interestrate1"></span><br><span id="duration1"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane2"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname2"></span><br><span class="med"><span id="amount2"></span><br><span id="industry2"></span><br><span id="interestrate2"></span><br><span id="duration2"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane3"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname3"></span><br><span class="med"><span id="amount3"></span><br><span id="industry3"></span><br><span id="interestrate3"></span><br><span id="duration3"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane4"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname4"></span><br><span class="med"><span id="amount4"></span><br><span id="industry4"></span><br><span id="interestrate4"></span><br><span id="duration4"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane5"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname5"></span><br><span class="med"><span id="amount5"></span><br><span id="industry5"></span><br><span id="interestrate5"></span><br><span id="duration5"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane6"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname6"></span><br><span class="med"><span id="amount6"></span><br><span id="industry6"></span><br><span id="interestrate6"></span><br><span id="duration6"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane7"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname7"></span><br><span class="med"><span id="amount7"></span><br><span id="industry7"></span><br><span id="interestrate7"></span><br><span id="duration7"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane8"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname8"></span><br><span class="med"><span id="amount8"></span><br><span id="industry8"></span><br><span id="interestrate8"></span><br><span id="duration8"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane9"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname9"></span><br><span class="med"><span id="amount9"></span><br><span id="industry9"></span><br><span id="interestrate9"></span><br><span id="duration9"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <li class="pane10"><span class="med">lendr rating | credit score</span><div class="img"></div><div><span class="big" id="fullname10"></span><br><span class="med"><span id="amount10"></span><br><span id="industry10"></span><br><span id="interestrate10"></span><br><span id="duration10"></span></span></div><div class="like"></div><div class="dislike"></div></li>
                        <script>
                            // make this dynamic!!!
                        
                            $('.pane10 .img').css('background', 'url("'+rows[0]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname10").html(rows[0]['fullname']);
                            $("#amount10").html("Wants to loan $" + rows[0]['amount']);
                            $("#industry10").html("Industry: " + rows[0]['industry']);
                            $("#interestrate10").html("Current interest rate: " + rows[0]['interest_rate'] + "%");
                            $("#duration10").html("Duration: " + rows[0]['duration_days'] + " months");
                            
                            $('.pane9 .img').css('background', 'url("'+rows[1]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname9").html(rows[1]['fullname']);
                            $("#amount9").html("Wants to loan $" + rows[1]['amount']);
                            $("#industry9").html("Industry: " + rows[1]['industry']);
                            $("#interestrate9").html("Current interest rate: " + rows[1]['interest_rate'] + "%");
                            $("#duration9").html("Duration: " + rows[1]['duration_days'] + " months");
                            
                            $('.pane8 .img').css('background', 'url("'+rows[2]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname8").html(rows[2]['fullname']);
                            $("#amount8").html("Wants to loan $" + rows[2]['amount']);
                            $("#industry8").html("Industry: " + rows[2]['industry']);
                            $("#interestrate8").html("Current interest rate: " + rows[2]['interest_rate'] + "%");
                            $("#duration8").html("Duration: " + rows[2]['duration_days'] + " months");
                            
                            $('.pane7 .img').css('background', 'url("'+rows[3]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname7").html(rows[3]['fullname']);
                            $("#amount7").html("Wants to loan $" + rows[3]['amount']);
                            $("#industry7").html("Industry: " + rows[3]['industry']);
                            $("#interestrate7").html("Current interest rate: " + rows[3]['interest_rate'] + "%");
                            $("#duration7").html("Duration: " + rows[3]['duration_days'] + " months");
                            
                            $('.pane6 .img').css('background', 'url("'+rows[4]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname6").html(rows[4]['fullname']);
                            $("#amount6").html("Wants to loan $" + rows[4]['amount']);
                            $("#industry6").html("Industry: " + rows[4]['industry']);
                            $("#interestrate6").html("Current interest rate: " + rows[4]['interest_rate'] + "%");
                            $("#duration6").html("Duration: " + rows[4]['duration_days'] + " months");
                            
                            $('.pane5 .img').css('background', 'url("'+rows[5]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname5").html(rows[5]['fullname']);
                            $("#amount5").html("Wants to loan $" + rows[5]['amount']);
                            $("#industry5").html("Industry: " + rows[5]['industry']);
                            $("#interestrate5").html("Current interest rate: " + rows[5]['interest_rate'] + "%");
                            $("#duration5").html("Duration: " + rows[5]['duration_days'] + " months");
                            
                            $('.pane4 .img').css('background', 'url("'+rows[6]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname4").html(rows[6]['fullname']);
                            $("#amount4").html("Wants to loan $" + rows[6]['amount']);
                            $("#industry4").html("Industry: " + rows[6]['industry']);
                            $("#interestrate4").html("Current interest rate: " + rows[6]['interest_rate'] + "%");
                            $("#duration4").html("Duration: " + rows[6]['duration_days'] + " months");
                            
                            $('.pane3 .img').css('background', 'url("'+rows[7]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname3").html(rows[7]['fullname']);
                            $("#amount3").html("Wants to loan $" + rows[7]['amount']);
                            $("#industry3").html("Industry: " + rows[7]['industry']);
                            $("#interestrate3").html("Current interest rate: " + rows[7]['interest_rate'] + "%");
                            $("#duration3").html("Duration: " + rows[7]['duration_days'] + " months");
                            
                            $('.pane2 .img').css('background', 'url("'+rows[8]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname2").html(rows[8]['fullname']);
                            $("#amount2").html("Wants to loan $" + rows[8]['amount']);
                            $("#industry2").html("Industry: " + rows[8]['industry']);
                            $("#interestrate2").html("Current interest rate: " + rows[8]['interest_rate'] + "%");
                            $("#duration2").html("Duration: " + rows[8]['duration_days'] + " months");
                            
                            $('.pane1 .img').css('background', 'url("'+rows[9]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                            $("#fullname1").html(rows[9]['fullname']);
                            $("#amount1").html("Wants to loan $" + rows[9]['amount']);
                            $("#industry1").html("Industry: " + rows[9]['industry']);
                            $("#interestrate1").html("Current interest rate: " + rows[9]['interest_rate'] + "%");
                            $("#duration1").html("Duration: " + rows[9]['duration_days'] + " months");
                        </script>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-12"></div>
    </div>
    
    <h2>Details</h2>
    
    
    
    <script>
        console.log(${rows})
        $("#tinderslide").jTinder({
            onLike: function (item) {
                correctIndex = 10 - item.index()-1; // also needs to be dynamic
                location.href="./loan/" + rows[correctIndex]['fullname']
            }
        });
    </script>
    `
)};