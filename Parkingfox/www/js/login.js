var url = 'http://192.168.0.11/php-files/signin.php';
var url1 = 'http://192.168.0.11/php-files/login.php';
var data = '?lastname=Langlitz&firstname=Maurice&email=demoege@web.de&password=test1337'; // dynamisch aus formular
var data1 = '?email=demonege@web.de&password=test1337'; // dynamisch aus formular

var signin = url + data;
var login = url1 + data1;
//var parking = url2 + data2;

document.getElementById("login-test").onclick = function() {CallService(login,document.getElementById("login-box"),true)};
document.getElementById("login-test1").onclick = function() {CallService(signin,document.getElementById("login-box"),true)};
//document.getElementById("login-test2").onclick = function() {CallService(parking,document.getElementById("parking"))};

//END DEBUG


//on document load test
checkIfLogin(false);


function CallService(url,responseElement,islogin)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            responseElement.innerHTML = xhttp.responseText;
            var response = xhttp.response;
            if(response != 'false' && islogin)
            {
                setStorageItem(response);
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
        if (login == 'true') {
            CallService();
            return true;
        }
    }

}