function checkPw() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var mess = document.getElementById("message");
    var direct = document.getElementById("link");
    var ch = document.getElementById("butt");

    if (user === "admin" && pass === "234") {
        mess.innerHTML = ""
        link.style.display = "flex"
        mess.innerHTML = "Congrats! The username and password you entered are correct"
        mess.style.color = "#90EE90";
        ch.style.display = "none";
    } else {
        mess.innerHTML = "The username or password you entered is incorrect!"
        mess.style.color = "red";
        ch.classList.add("wrong")
        link.style.display = "none";
    }
}


function getValue() {
    var mess = document.getElementById("message");
    var ch = document.getElementById("butt");
    link.style.display = "none";
    ch.classList.add("onget")
    mess.innerHTML = ""
}