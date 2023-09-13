let email =document.forms ['form']['email'];
let password =document.forms ['form']['email'];

let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');


function email_Verify() {
    var email = document.getElementById("email");
    var email_error = document.getElementById("email_error");

    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = 'none';
        return true;
    }
}

function password_Verify() {
    var password = document.getElementById("password");
    var password_error = document.getElementById("password_error");

    if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        password_error.style.display = 'none';
        return true;
    }
}

function validated() {
    var email = document.getElementById("email");
    var email_error = document.getElementById("email_error");
    var password = document.getElementById("password");
    var pass_error = document.getElementById("password_error");

    if (email.value.length < 8) {
        email.style.border = "1px solid red";
        email_error.style.display = 'block';
        email.focus();
        alert("Please Input Your Email");
        return false;
    }

    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        pass_error.style.display = 'block'; 
        password.focus();
        alert("Need to input " + (8 - password.value.length) + " more character(s) for your password.");
        return false;
    }
}