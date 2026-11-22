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

    if (pass !== confirm) {
        msg.innerHTML = "Passwords do not match.";
        return false;
    }

    alert("Registration successful! Redirecting to login...");
    window.location.href = "staff.html";
    return false;
}
