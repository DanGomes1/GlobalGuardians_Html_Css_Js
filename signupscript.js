var fnameError = document.getElementById('fname_error');
var emailError = document.getElementById('email_error');
var signupError = document.getElementById('signup_error');
var usernameError = document.getElementById('uname_error');
var passwordError = document.getElementById('password_error');
var userEmailError = document.getElementById('user_email_error');
var loginError = document.getElementById('login_error');

function validateName(){

    var name = document.getElementById('fullname').value;

    if (name.trim() == ""){
        fnameError.innerHTML = '&nbsp Name is Required!';
        return false;
    }

    else if(!name.trim().match(/^[A-Za-z]*\s{1}[A-Za-z]/)){

        fnameError.innerHTML = '&nbsp Full Name is Required!';
        return false;

    }

    fnameError.innerHTML = '<p style = "color:green; margin:0; display:inline;">&nbsp Valid </p>';
    return true;
    
}

function validateEmail(){

    var email = document.getElementById('email').value;

    if (email == ""){

        emailError.innerHTML = '&nbsp Email address is required!';
        return false;
    }

    else if(!email.trim().match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = '&nbsp Invalid email address!';
        return false;
    }

    emailError.innerHTML = '<p style = "color:green; margin:0; display:inline;">&nbsp Valid </p>';
    return true;

}

function validateSignupForm(){

    if(!validateName() || !validateEmail()){

        validateName();
        validateEmail();

        signupError.style.display ='inline';
        signupError.innerHTML = 'Fix all errors to Sign-up!';
        setTimeout(function(){signupError.style.display ='none'}, 5000);
        return false;
    }

    return true;
}

function signUp(){

    if(!validateSignupForm || !validateName() || !validateEmail()){
        
        validateSignupForm();

    }

    alert("Sign Up Successful!");
    return true;
}

function validateUsername(){
    
    var username = document.getElementById('uname').value;
    var char = 10;
    requiredLength = char -username.length;

    if(username == ''){

        usernameError.innerHTML = ' Username required!';
        return false;
    }

    else if(username.length < 10){

        usernameError.innerHTML = ' Username too short: ' + requiredLength + ' more characters required';
        return false;
    }

    else if(username.length > 25){

        usernameError.innerHTML = ' Username too long: max characters allowed is 25';
        return false;
    }

    usernameError.innerHTML = '<p style = "color:green; margin:0; display:inline;">&nbsp Valid </p>';
    return true;

}

function preventSpace(event)
{
   if(event.which == 32)
   {
      event.preventDefault();
      return false;
   }
}


function validatePassword(){

    var passkey = document.getElementById('user_password').value;
    var passChar = 8;
    var leftover = passChar - passkey.length;

    if (passkey.trim() == ''){

        passwordError.innerHTML = ' Password required!';
        return false;
    }

    else if(passkey.length<8){

        passwordError.innerHTML = ' Password too short: ' + leftover + ' more characters required';
        return false;
    }

    else if(passkey.length > 25){

        passwordError.innerHTML = ' Password too long: max characters allowed is 25';
        return false; 
    }

    else if(passkey.includes(' ')){

        passwordError.innerHTML = ' Whitespace not allowed!';
        return false; 
    }

    passwordError.innerHTML = '<p style = "color:green; margin:0; display:inline;">&nbsp Valid </p>';
    return true;

}

function validateUserEmail(){

    var userEmail = document.getElementById('user_email').value;

    if (userEmail == ""){

        userEmailError.innerHTML = '&nbsp Email address is required!';
        return false;
    }

    else if(!userEmail.trim().match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        userEmailError.innerHTML = '&nbsp Invalid email address!';
        return false;
    }

    userEmailError.innerHTML = '<p style = "color:green; margin:0; display:inline;">&nbsp Valid </p>';
    return true;

}

function validateLogin(){

    if(!validateUsername() || !validatePassword() || !validateUserEmail()){
        
        validateUsername();
        validatePassword();
        validateUserEmail();

        loginError.style.display = 'inline';
        loginError.innerHTML = 'Fix all errors to log in!';
        setTimeout(function(){loginError.style.display ='none'}, 5000);
        return false;
    }

    return true;
}

function Login(){

    if(!validateUsername() || !validatePassword() || !validateUserEmail() || !validateLogin()){

        validateLogin();

    }

    alert('Log in Successful: \nYou will be redirected to the home page');
    return true;
}