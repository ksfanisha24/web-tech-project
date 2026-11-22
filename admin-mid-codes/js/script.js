function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

    let specials = "!@#$%^&*_-";
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
         if (specials.includes(password[i])) {
         hasSpecial = true;
    }
    }


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


    else if (age === "" || isNaN(age) || age < 1) {

        alert("Please enter a valid age.");
        return false;

    }

    else if (dob === "") {

        alert("Please enter a date of birth.");
        return false;

    }

    else if (!document.getElementById("male").checked &&
             !document.getElementById("female").checked) {

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

        alert("Registration successful!");
        return true;

    }

}