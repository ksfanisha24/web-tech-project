// Update staff profile information
function updateStaffProfile() {
    let msg = document.getElementById("profileMessage");
    msg.innerHTML = "Profile information updated successfully.";
    return false;
}

// Change staff account password
function updateStaffPassword() {
    let oldPass = document.getElementById("oldPass").value;
    let newPass = document.getElementById("newPass").value;
    let confPass = document.getElementById("confNewPass").value;
    let msg = document.getElementById("passwordMessage");

    // 1. Check for uppercase
    if (newPass.toLowerCase() === newPass) {
        msg.innerHTML = "New password must have at least one uppercase letter.";
        msg.style.color = "#c95778";
        return false;
    }

    // 2. Check for lowercase
    if (newPass.toUpperCase() === newPass) {
        msg.innerHTML = "New password must have at least one lowercase letter.";
        msg.style.color = "#c95778";
        return false;
    }

    // 3. Loop to check for numbers
    let hasNumber = false;
    for (let i = 0; i < newPass.length; i++) {
        if (newPass[i] >= "0" && newPass[i] <= "9") {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        msg.innerHTML = "New password must have at least one number.";
        msg.style.color = "#c95778";
        return false;
    }

    // 4. Loop to check for special characters
    let specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    let hasSpecial = false;
    for (let i = 0; i < newPass.length; i++) {
        if (specialChars.includes(newPass[i])) {
            hasSpecial = true;
            break;
        }
    }
    if (!hasSpecial) {
        msg.innerHTML = "New password must have at least one special character.";
        msg.style.color = "#c95778";
        return false;
    }

    // 5. Check if new passwords match
    if (newPass !== confPass) {
        msg.innerHTML = "New passwords do not match.";
        msg.style.color = "#c95778";
        return false;
    }

    // Success
    msg.innerHTML = "Password changed successfully.";
    msg.style.color = "#34513d";

    document.getElementById("oldPass").value = "";
    document.getElementById("newPass").value = "";
    document.getElementById("confNewPass").value = "";

    return false;
}