function collectData(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    document.getElementById('displayFirstName').textContent = firstName;
    document.getElementById('displayLastName').textContent = lastName;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayPassword').textContent = password;
    document.getElementById('displayConfirmPassword').textContent = confirmPassword;

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('dataCard').style.display = 'block';
    return false;
}

function finalSubmit() {
    alert("Form submitted successfully!");
    document.getElementById('registrationForm').submit();
}

function editForm() {
    document.getElementById('dataCard').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}
function VerifyPassword(){
    var password=document.getElementById("password").value;
    var pwdError=document.getElementById("pwdError");
    var regExp=/(?=.*[A-Z])\w{4,15}/;
    if(password.match(regExp))
    {
        pwdError.innerHTML="Strong Password".fontcolor('green');
    }else{
        if(password.length<4){
            pwdError.innerHTML="Poor Password".fontcolor('red');
        }
        else{
            pwdError.innerHTML="Weak Password".fontcolor('gold');
        }
    }
}