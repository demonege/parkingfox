document.getElementById("login-test").onclick = function() {loginalert()};

var url = 'http://parkingfox-script.local/signin.php';
var url1 = 'http://parkingfox-script.local/login.php';
var data = '?lastname=Langlitz&firstname=Maurice&email=demonege@web.de&password=test1337'; // dynamisch aus formular
var data1 = '?email=demonege@web.de&password=test1337'; // dynamisch aus formular

var test = url + data;
var test1 = url1 + data1;


function loginalert()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("login-box").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("POST", test1, true);
    xhttp.send();
}

function setCokie()
{
    var time = 365*24*60*60*1000;
    var expires = 'expires=' + time;
    var cname = 'login';
    var cvalue = 'benutzername';
    document.cookie = cname + "=" + cvalue + "; " + expires;
}