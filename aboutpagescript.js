var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var messageError = document.getElementById('message_error');
var submitError = document.getElementById('submit_error');

function validateName(){

    var name = document.getElementById('contact_name').value;

    if (name.trim() == ""){
        nameError.innerHTML = '&nbsp Name is Required!';
        return false;
    }

    else if(!name.trim().match(/^[A-Za-z]*\s{1}[A-Za-z]/)){

        nameError.innerHTML = '&nbsp Full Name is Required!';
        return false;

    }

    nameError.innerHTML = '<p style = "color:green; margin:0;">&nbsp Valid </p>';
    return true;
    
}

function validateEmail(){

    var email = document.getElementById('contact_email').value;

    if (email == ""){

        emailError.innerHTML = '&nbsp Email address is required!';
        return false;
    }

    else if(!email.trim().match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = '&nbsp Invalid email address!';
        return false;
    }

    emailError.innerHTML = '<p style = "color:green; margin:0;">&nbsp Valid </p>';
    return true;

}

function validateMessage(){

    var message = document.getElementById('msg').value;
    var required = 50;
    var remaining = required - message.length;

    if(message.trim() ==''){

        messageError.innerHTML = '&nbsp Message is required!';
        return false;
    }

    else if(remaining>0){

        messageError.innerHTML = '&nbsp' + remaining + ' more characters required!';
        return false;
    }

    messageError.innerHTML = '<p style = "color:green; margin:0;">&nbsp Valid </p>';
    return true;
}


function validateContactForm(){

    if(!validateName() || !validateEmail || !validateMessage){

        validateName();
        validateEmail();
        validateMessage();

        submitError.style.display = 'inline';
        submitError.innerHTML = '&nbsp Fix all errors before submitting!';
        setTimeout(function(){submitError.style.display = 'none';}, 5000)
        return false;

    }

    return true;

}

function submitMessage(){

    if (!validateContactForm() || !validateEmail() || !validateName() || !validateMessage()){

        validateContactForm();

    }

    alert("Message Submitted Successfully!");
    return true;

}