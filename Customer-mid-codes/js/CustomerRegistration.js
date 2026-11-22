
function showMessage(text, color) {
    let message = document.getElementById("message");

    message.innerHTML = text;
    message.style.color = color;
}

function validateRegistration() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmpassword").value;
    let address = document.getElementById("address").value.trim();

    //Check empty fields
    if (name === "" || email === "" || phone === "" ||
        password === "" || confirm === "" || address === "") {

        showMessage("Please fill in all required fields.", "red");
        return false;
    }

    //Check name length
    if (name.length < 2) {
        showMessage("Name needs at least 2 characters.", "red");
        return false;
    }

    //Check phone length and prefix
    if (phone.length !== 11 || phone.slice(0, 2) !== "01") {
        showMessage("Phone must have 11 digits and start with 01.", "red");
        return false;
    }

    //Check phone contains digits only
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < "0" || phone[i] > "9") {
            showMessage("Phone number must contain digits only.", "red");
            return false;
        }
    }

    //Check password length
    if (password.length < 5) {
        showMessage("Password needs at least 5 characters.", "red");
        return false;
    }

    //Check uppercase letter
    if (password === password.toLowerCase()) {
        showMessage("Password needs an uppercase letter.", "red");
        return false;
    }
    //Check lowercase letter
if (password === password.toUpperCase()) {
    showMessage("Password needs a lowercase letter.", "red");
    return false;
}

//Check special character
let specialCharacters = "!@#$%^&*";
let hasSpecial = false;

for (let i = 0; i < password.length; i++) {
    if (specialCharacters.indexOf(password[i]) !== -1) {
        hasSpecial = true;
        break;
    }
}

if (hasSpecial === false) {
    showMessage("Password needs a special character (!@#$%^&*).", "red");
    return false;
}

    //Check password confirmation
    if (password !== confirm) {
        showMessage("Passwords do not match.", "red");
        return false;
    }

    // Check gender selection
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if (male === false && female === false && other === false) {
        showMessage("Please select your gender.", "red");
        return false;
    }

    //Check terms checkbox
    let terms = document.getElementById("terms").checked;

    if (terms === false) {
        showMessage("Please agree to the terms and conditions.", "red");
        return false;
    }

   alert("Validation passed! Please log in.");
   window.location.href = "CustomerLogin.html";
   return false;
}