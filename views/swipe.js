module.exports = function(rows) {
	return (
    `
    <script>rows = JSON.parse('${rows}');</script>

    <!-- jQuery library -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    
    <!-- using https://github.com/do-web/jTinder -->
    
    <link rel="stylesheet" type="text/css" href="css/jTinder.css">
    
    <!-- transform2d lib -->
    <script type="text/javascript" src="js/jquery.transform2d.js"></script>

    <!-- jTinder lib -->
    <script type="text/javascript" src="js/jquery.jTinder.js"></script>
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    
    <div id="tinderslide">
        <ul>
            <li class="pane1"><div class="img"></div><div><span id="fullname1"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane2"><div class="img"></div><div><span id="fullname2"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane3"><div class="img"></div><div><span id="fullname3"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane4"><div class="img"></div><div><span id="fullname4"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane5"><div class="img"></div><div><span id="fullname5"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane6"><div class="img"></div><div><span id="fullname6"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane7"><div class="img"></div><div><span id="fullname7"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane8"><div class="img"></div><div><span id="fullname8"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane9"><div class="img"></div><div><span id="fullname9"></span></div><div class="like"></div><div class="dislike"></div></li>
            <li class="pane10"><div class="img"></div><div><span id="fullname10"></span></div><div class="like"></div><div class="dislike"></div></li>
            <script>
                $('.pane10 .img').css('background', 'url("'+rows[0]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname10").html(rows[0]['fullname']);
                $('.pane9 .img').css('background', 'url("'+rows[1]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname9").html(rows[1]['fullname']);
                $('.pane8 .img').css('background', 'url("'+rows[2]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname8").html(rows[2]['fullname']);
                $('.pane7 .img').css('background', 'url("'+rows[3]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname7").html(rows[3]['fullname']);
                $('.pane6 .img').css('background', 'url("'+rows[4]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname6").html(rows[4]['fullname']);
                $('.pane5 .img').css('background', 'url("'+rows[5]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname5").html(rows[5]['fullname']);
                $('.pane4 .img').css('background', 'url("'+rows[6]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname4").html(rows[6]['fullname']);
                $('.pane3 .img').css('background', 'url("'+rows[7]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname3").html(rows[7]['fullname']);
                $('.pane2 .img').css('background', 'url("'+rows[8]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname2").html(rows[8]['fullname']);
                $('.pane1 .img').css('background', 'url("'+rows[9]['photo']+'")'+' no-repeat scroll center center').css('background-size', 'cover')
                $("#fullname1").html(rows[9]['fullname']);
            </script>
        </ul>
    </div>
    
    
    
    <script>
        console.log(${rows})
        $("#tinderslide").jTinder();
    </script>
    `
)};