// Validate staff login form
function validateStaffLogin() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.innerHTML = "Please enter username and password.";
        return false;
    }

    if (user === "staff1" && pass === "staff1") {
        alert("Login successful!");
        window.location.href = "staff-dashboard.html";
        return false;
    } else {
        msg.innerHTML = "Invalid username or password.";
        return false;
    }
}
