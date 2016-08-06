var siginScript = 'http://www.parkingfox.de/php-files/signin.php';
var loginScript = 'http://www.parkingfox.de/php-files/login.php';
var checkLoginScript = 'http://www.parkingfox.de/php-files/checkLogin.php';
var data = '?lastname=Langlitz&firstname=Maurice&email=demonege@web.de&password=test1337'; // dynamisch aus formular


//var signin = siginScript + data;
//var parking = url2 + data2;

//document.getElementById("login-test").onclick = function() {CallService(login,document.getElementById("login-box"),true)};
//document.getElementById("login-test1").onclick = function() {CallService(signin,document.getElementById("login-box"),true)};
//document.getElementById("login-test3").onclick = function() {checkIfLogin(false)};
document.getElementById("login-btn").onclick = function() {startlogin()};
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
                responseElement.style.display = "block";
                responseElement.className = "success";
                responseElement.innerHTML = 'Login erfolgreich';
                setTimeout(function(){ document.getElementById("Login").style.display = "none"; }, 1500);
            }
            else
            {
                responseElement.style.display = "block";
                responseElement.className = "error";
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

function startlogin()
{
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var url = loginScript + '?email=' + name + '&password=' + password;

    CallService(url,document.getElementById("repsonse"),true)
}