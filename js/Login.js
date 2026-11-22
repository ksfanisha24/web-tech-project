function validateManagerLogin() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    }

    else if (pass === "") {
        alert("Please enter your password.");
        return false;
    }

    else if (pass.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    else if (email === "manager@gmail.com" && pass === "manager123") {
        alert("Login successful!");
        return true;
    }

    else {
        alert("Invalid email or password.");
        return false;
    }
}
