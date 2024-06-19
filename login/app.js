function validateform() {
    var emailVal = document.myform1.email.value;
    var passwordVal = document.myform1.password.value;
    
    if(emailVal == null || emailVal == '') {
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
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};