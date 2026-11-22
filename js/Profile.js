function showMessage(id, text, color) {
    let message = document.getElementById(id);
    message.innerHTML = text;
    message.style.color = color;
    message.style.display = "block";
}

function updateManagerProfile() {
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if (fullname === "") {
        showMessage("profileAlert", "Full name is required.", "red");
        return false;
    }

    if (fullname.length < 2) {
        showMessage("profileAlert", "Full name needs at least 2 characters.", "red");
        return false;
    }

    for (let i = 0; i < fullname.length; i++) {
        if (fullname[i] >= "0" && fullname[i] <= "9") {
            showMessage("profileAlert", "Full name must not contain numbers.", "red");
            return false;
        }
    }

    if (email === "") {
        showMessage("profileAlert", "Email is required.", "red");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("profileAlert", "Email must contain @ and .", "red");
        return false;
    }

    if (phone !== "") {
        if (isNaN(phone) || phone.length !== 11) {
            showMessage("profileAlert", "Phone number must be 11 digits.", "red");
            return false;
        }
    }

    document.getElementById("displayFullName").innerHTML = fullname;
    document.getElementById("displayManagerName").innerHTML = fullname;
    document.getElementById("displayEmail").innerHTML = email;
    document.getElementById("displayPhone").innerHTML = phone;
    document.getElementById("displayAddress").innerHTML = address;

    showMessage("profileAlert", "Profile updated successfully!", "green");
    return false;
}


function updateManagerPassword() {
    let current = document.getElementById("currentpassword").value;
    let newPass = document.getElementById("newpassword").value;
    let confirm = document.getElementById("confirmpassword").value;

    if (current === "") {
        showMessage("passwordAlert", "Current password is required.", "red");
        return false;
    }

    if (newPass.length < 5) {
        showMessage("passwordAlert", "New password needs at least 5 characters.", "red");
        return false;
    }

    if (newPass === newPass.toLowerCase()) {
        showMessage("passwordAlert", "New password needs an uppercase letter.", "red");
        return false;
    }

    if (newPass !== confirm) {
        showMessage("passwordAlert", "Passwords do not match.", "red");
        return false;
    }

    if (newPass === current) {
        showMessage("passwordAlert", "New password must be different from the current password.", "red");
        return false;
    }

    document.getElementById("currentpassword").value = "";
    document.getElementById("newpassword").value = "";
    document.getElementById("confirmpassword").value = "";

    showMessage("passwordAlert", "Password updated successfully!", "green");
    return false;

}

function showName() {
    let name = document.getElementById("fullname").value.trim();
    if (name !== "") {
        document.getElementById("displayManagerName").innerHTML = name;
        document.getElementById("profileAvatar").innerHTML = name.slice(0, 1).toUpperCase();
    }
}

function avatarOver() {
    document.getElementById("profileAvatar").style.backgroundColor = "#5f8b55";
}

function avatarOut() {
    document.getElementById("profileAvatar").style.backgroundColor = "";
}

document.getElementById("fullname").addEventListener("keyup", showName);
document.getElementById("profileAvatar").addEventListener("mouseover", avatarOver);
document.getElementById("profileAvatar").addEventListener("mouseout", avatarOut);
