function validateform() {
    var usernamVal = document.myform.username.value;
    var emailVal = document.myform.email.value;
    var passwordVal = document.myform.password.value;
    var cmpasswordVal = document.myform.cmpassword.value;

    if(usernamVal == null || usernamVal == '') {
        alert("Username is required!")
        return false;
    }
    else if(emailVal == null || emailVal == '') {
        alert("Email is required!")
        return false;
    }
    else if(!validateEmail(emailVal)) {
        alert("Invalid email address!");
        return false;
    }
    else if(passwordVal == null || passwordVal == '') {
        alert('Password is required!')
        return false;
    }
    else if(passwordVal.length<8) {
        alert('Please enter 8 Charecters of Password!')
        return false;
    }
    else if(cmpasswordVal == null || cmpasswordVal == '') {
        alert('Confirm password is required!')
        return false;
    }
    else if (cmpasswordVal !== passwordVal) {
        alert('Confirm Password does not match!')
        return false;
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};