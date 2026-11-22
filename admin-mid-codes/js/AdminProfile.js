function showMessage(id, text, color) {
    let message = document.getElementById(id);
    message.innerHTML = text;
    message.style.color = color;
}

function validateProfile() {
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (fullname === "") {
        showMessage("profileMessage", "Full name is required.", "red");
        return false;
    }

    if (fullname.length < 2) {
        showMessage("profileMessage", "Full name needs at least 2 characters.", "red");
        return false;
    }

    for (let i = 0; i < fullname.length; i++) {
        if (fullname[i] >= "0" && fullname[i] <= "9") {
            showMessage("profileMessage", "Full name must not contain numbers.", "red");
            return false;
        }
    }

    if (email === "") {
        showMessage("profileMessage", "Email is required.", "red");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("profileMessage", "Email must contain @ and .", "red");
        return false;
    }

    if (phone !== "") {
        if (isNaN(phone) || phone.length !== 11) {
            showMessage("profileMessage", "Phone number must be 11 digits.", "red");
            return false;
        }
    }


    document.getElementById("infoName").innerHTML = fullname;
    document.getElementById("infoEmail").innerHTML = email;
    showMessage("profileMessage", "Profile updated successfully!", "green");
    return false;
}

function validatePassword() {
    let current = document.getElementById("currentpassword").value;
    let newPass = document.getElementById("newpassword").value;
    let confirm = document.getElementById("confirmpassword").value;

    if (current === "") {
        showMessage("passwordMessage", "Current password is required.", "red");
        return false;
    }

    if (newPass.length < 5) {
        showMessage("passwordMessage", "New password needs at least 5 characters.", "red");
        return false;
    }

    if (newPass === newPass.toLowerCase()) {
        showMessage("passwordMessage", "New password needs an uppercase letter.", "red");
        return false;
    }

    if (newPass !== confirm) {
        showMessage("passwordMessage", "Passwords do not match.", "red");
        return false;
    }

    if (newPass === current) {
        showMessage("passwordMessage", "New password must be different from the current password.", "red");
        return false;
    }

    document.getElementById("currentpassword").value = "";
    document.getElementById("newpassword").value = "";
    document.getElementById("confirmpassword").value = "";
    document.getElementById("passwordStrength").innerHTML = "";
    showMessage("passwordMessage", "Password updated successfully!", "green");
    return false; 
}

function showName() {
    let name = document.getElementById("fullname").value.trim();

    if (name !== "") {
        document.getElementById("profileName").innerHTML = name;
        document.getElementById("profileAvatar").innerHTML = name.slice(0, 1).toUpperCase();
    }
}

function countAddress() {
    let text = document.getElementById("address").value;
    document.getElementById("addressCount").innerHTML = "Characters: " + text.length;
}

function showStrength() {
    let password = document.getElementById("newpassword").value;
    let strength = document.getElementById("passwordStrength");

    if (password === "") {
        strength.innerHTML = "";
    } else if (password.length < 5) {
        strength.innerHTML = "Weak: use at least 5 characters";
        strength.style.color = "red";
    } else if (password === password.toLowerCase()) {
        strength.innerHTML = "Medium: add an uppercase letter";
        strength.style.color = "orange";
    } else {
        strength.innerHTML = "Strong password";
        strength.style.color = "green";
    }
}

function avatarOver() {
    document.getElementById("profileAvatar").style.backgroundColor = "#5f8b55";
}

function avatarOut() {
    document.getElementById("profileAvatar").style.backgroundColor = "";
}

document.getElementById("fullname").addEventListener("keyup", showName);
document.getElementById("address").addEventListener("keyup", countAddress);
document.getElementById("newpassword").addEventListener("keyup", showStrength);
document.getElementById("profileAvatar").addEventListener("mouseover", avatarOver);
document.getElementById("profileAvatar").addEventListener("mouseout", avatarOut);