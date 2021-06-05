function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var login = getCookie("userlogin");
  if (login != "") {
    document.getElementById("loginbtn").disabled = true;
  } else {
	document.getElementById("logoutbtn").disabled = true;
  }
}

function deleteCookie() {
	document.cookie = "userlogin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function validate() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	if (email == "" || password == "") {
		alert ("Please enter email and password");
	}
	
	else if (email == "form" && password == "123") {
		setCookie("userlogin", email, 30);
		alert ("Login successfully");
		window.location.href = "Homepage.html";
		return false;
	}

	else {
		alert("Wrong email or password");
	}
}