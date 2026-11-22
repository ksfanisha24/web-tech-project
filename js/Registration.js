function validateManagerRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    else if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    }

    else if (!email.includes("@") || !email.includes(".")) {
        alert("Email must contain @ and .");
        return false;
    }

    else if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    else if (password === password.toLowerCase()) {
        alert("Password must contain an uppercase letter.");
        return false;
    }

    else if (password === password.toUpperCase()) {
        alert("Password must contain a lowercase letter.");
        return false;
    }

    else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    else if (age === "" || isNaN(age) || age < 18 || age > 100) {
        alert("Please enter a valid age (18-100).");
        return false;
    }

    else if (dob === "") {
        alert("Please enter your date of birth.");
        return false;
    }

    else if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
        alert("Please select your gender.");
        return false;
    }

    else if (document.getElementById("membership").value === "") {
        alert("Please select your membership type.");
        return false;
    }

    else if (document.getElementById("file").value === "") {
        alert("Please upload your profile picture.");
        return false;
    }

    else if (address.trim() === "") {
        alert("Please enter your address.");
        return false;
    }

    else if (!document.getElementById("terms").checked) {
        alert("Please agree to the terms and conditions.");
        return false;
    }

    else {
        alert("Manager registration successful!");
        return true;
    }
}
