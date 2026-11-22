
function showMessage(text, color) {
    let message = document.getElementById("message");

    message.innerHTML = text;
    message.style.color = color;
}

//Validate customer login
function validateLogin() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    //Check empty fields
    if (email === "" || password === "") {
        showMessage("Please enter your email and password.", "red");
        return false;
    }

    //Check account
    if (email === "mim@gmail.com" && password === "Mim@123") {
        alert("Login successful!");

        window.location.href = "CustomerHome.html";

        return false;
    } else {
        showMessage("Incorrect email or password.", "red");
        return false;
    }
}