
function validateLogin() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    else if (!email.includes("@") || !email.includes(".")) {
        alert("Email must contain @ and .");
        return false;
    }

    else if (password !== "2424") {
        alert("Incorrect password.");
        return false;
    }


    else {
        return true;
    }
}
