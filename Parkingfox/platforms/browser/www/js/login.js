var url = 'http://192.168.0.11/php-files/signin.php';
var url1 = 'http://192.168.0.11/php-files/login.php';
var url2 = 'http://192.168.0.11/php-files/checkLogin.php';
var data = '?lastname=Langlitz&firstname=Maurice&email=demonege@web.de&password=test1337'; // dynamisch aus formular
var data1 = '?email=demonee@web.de&password=test1337'; // dynamisch aus formular

var signin = url + data;
var login = url1 + data1;
//var parking = url2 + data2;

//document.getElementById("login-test").onclick = function() {CallService(login,document.getElementById("login-box"),true)};
//document.getElementById("login-test1").onclick = function() {CallService(signin,document.getElementById("login-box"),true)};
//document.getElementById("login-test3").onclick = function() {checkIfLogin(false)};
document.getElementById("login-btn").onclick = function() {CallService(login,document.getElementById("repsonse"),true)};
//document.getElementById("login-test2").onclick = function() {CallService(parking,document.getElementById("parking"))};

//END DEBUG


//on document load test

if(checkIfLogin(false)) {
    console.log(true);
} else {
    console.log(false)
}


function CallService(url,responseElement,islogin)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = xhttp.response;
            if(response != 'false' && islogin)
            {
                setStorageItem(response);

            }
            else
            {
                responseElement.style.display = "block";
                responseElement.innerHTML = 'Ihr Passwort oder der Benutzername sind falsch bitte überprüfen sie ihre angaben';
            }
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}

function setCokie()
{
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var cname = 'login';
    var cvalue = true;
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function setStorageItem(uid)
{
    window.localStorage.setItem("login", "true");
    window.localStorage.setItem("uid", uid);
}

function checkIfLogin(cookie)
{
    if(cookie == true)
    {
        var cookie = document.cookie.split(';');
        if (cookie == false) {
            return false;
        } else {
            return true;
        }
    }
    else
    {

        var login = window.localStorage.getItem("login");
        var uid = window.localStorage.getItem("uid");

        //anpassungen prüfen des zweiten stroafe objects
        if(login == 'true')
        {
            return true;
        } else {
            return false;
        }
    }
}

function islogin()
{
    var data2 = '?identifire=' + uid;
    var service = url2 + data2;
    CallService(service,document.getElementById("identifire"),false);
}