// Enable submit button when terms are checked
function toggleSubmit() {
    let terms = document.getElementById("terms");
    let btn = document.getElementById("submitBtn");
    btn.disabled = !terms.checked;
}

// Validate staff registration form
function validateStaffRegister() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmpass").value;
    let msg = document.getElementById("message");

    // 1. Check for uppercase (if all lowercase equals original, there are no capitals)
    if (pass.toLowerCase() === pass) {
        msg.innerHTML = "Password must have at least one uppercase letter.";
        return false;
    }

    // 2. Check for lowercase (if all uppercase equals original, there are no small letters)
    if (pass.toUpperCase() === pass) {
        msg.innerHTML = "Password must have at least one lowercase letter.";
        return false;
    }

    // 3. Loop to check for numbers
    let hasNumber = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= "0" && pass[i] <= "9") {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        msg.innerHTML = "Password must have at least one number.";
        return false;
    }

    // 4. Loop to check for special characters
    let specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    let hasSpecial = false;
    for (let i = 0; i < pass.length; i++) {
        if (specialChars.includes(pass[i])) {
            hasSpecial = true;
            break;
        }
    }
    if (!hasSpecial) {
        msg.innerHTML = "Password must have at least one special character.";
        return false;
    }

    // 5. Check if passwords match
    if (pass !== confirm) {
        msg.innerHTML = "Passwords do not match.";
        return false;
    }

    alert("Registration successful! Redirecting to login...");
    window.location.href = "staff.html";
    return false;
}