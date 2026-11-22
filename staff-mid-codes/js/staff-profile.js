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

    if (newPass !== confPass) {
        msg.innerHTML = "New passwords do not match.";
        msg.style.color = "#c95778";
        return false;
    }

    msg.innerHTML = "Password changed successfully.";
    msg.style.color = "#34513d";

    document.getElementById("oldPass").value = "";
    document.getElementById("newPass").value = "";
    document.getElementById("confNewPass").value = "";

    return false;
}
