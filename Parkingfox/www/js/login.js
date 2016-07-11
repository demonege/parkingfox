document.getElementById("login-test").onclick = function() {loginalert()};

var url = 'http://192.168.0.11/login.php';
var data = '?lastname=Langlitz&firstname=Maurice&email=demonege@web.de&password=test1337';

var test = url + data;


function loginalert()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("login-box").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("POST", test, true);
    xhttp.send();
}