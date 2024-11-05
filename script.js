function checkPw() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var mess = document.getElementById("message");
    var ch = document.getElementById("butt");

    if (user === "admins" && pass === "234") {
        mess.innerHTML = ""
        mess.innerHTML = "Congrats! The username and password you entered are correct"
        window.open("ngl.html")
    } else {
        mess.innerHTML = "The username or password you entered is incorrect!"
        mess.style.color = "#EF233C";
        ch.style.display = "inline-block";
        ch.style.border = "2px solid #EF233C";
        ch.style.boxShadow = "rgba(239, 35, 60, 0.8) 0 0 20px 2px";
    }
}


function getValue() {
    var mess = document.getElementById("message");
    var ch = document.getElementById("butt");
    ch.style.display = "inline-block";
    ch.style.border = "2px solid #A2D9FF";
    ch.style.boxShadow = "rgba(162, 217, 255, 0.8) 0 0 20px 2px";
    mess.innerHTML = "Forgot the username & password? Chat owner";
    mess.style.color = "#000000";
}
