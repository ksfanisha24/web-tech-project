let editing = false;
let fields = ["name", "email", "phone", "address"];

//Show a message
function showMessage(id, text, color) {
    let message = document.getElementById(id);

    message.textContent = text;
    message.style.color = color;
}

//Update heading and avatar
function updateHeading() {
    let name = document.getElementById("name").textContent.trim();

    document.getElementById("profilename").textContent = name;

    document.getElementById("avatar").textContent =
        name.charAt(0).toUpperCase();
}

//Edit and save profile
function editProfile() {
    let button = document.getElementById("editbutton");

    if (editing === false) {
        for (let i = 0; i < fields.length; i++) {
            document.getElementById(fields[i]).contentEditable = "true";
        }

        editing = true;
        button.textContent = "Save Profile";

        showMessage(
            "profilemessage",
            "Click the information to edit.",
            "green"
        );

        document.getElementById("name").focus();
        return;
    }

    //Check empty fields
    for (let i = 0; i < fields.length; i++) {
        let value = document.getElementById(fields[i]).textContent.trim();

        if (value === "") {
            showMessage(
                "profilemessage",
                "Please fill in all fields.",
                "red"
            );
            return;
        }
    }

    let name = document.getElementById("name").textContent.trim();
    let email = document.getElementById("email").textContent.trim();
    let phone = document.getElementById("phone").textContent.trim();

    //Check name length
    if (name.length < 2) {
        showMessage(
            "profilemessage",
            "Name needs at least 2 characters.",
            "red"
        );
        return;
    }

    //Check email format
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.value = email;

    if (emailInput.checkValidity() === false) {
        showMessage(
            "profilemessage",
            "Please enter a valid email address.",
            "red"
        );
        return;
    }

    //Check phone length and prefix
    if (phone.length !== 11 || phone.slice(0, 2) !== "01") {
        showMessage(
            "profilemessage",
            "Phone must have 11 digits and start with 01.",
            "red"
        );
        return;
    }

    //Check phone contains digits only
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < "0" || phone[i] > "9") {
            showMessage(
                "profilemessage",
                "Phone number must contain digits only.",
                "red"
            );
            return;
        }
    }

    //Finish editing after validation
    for (let i = 0; i < fields.length; i++) {
        let cell = document.getElementById(fields[i]);

        cell.contentEditable = "false";
        cell.textContent = cell.textContent.trim();
    }

    editing = false;
    button.textContent = "Edit Profile";

    updateHeading();

    showMessage(
        "profilemessage",
        "Profile updated for this visit.",
        "green"
    );
}

//Validate password fields
function validatePassword() {
    let current = document.getElementById("currentpassword").value;
    let password = document.getElementById("newpassword").value;
    let confirm = document.getElementById("confirmpassword").value;
    let error = "";

    if (current === "" || password === "" || confirm === "") {
        error = "Please fill in all password fields.";
    } else if (password.length < 5) {
        error = "Password needs at least 5 characters.";
    } else if (password === password.toLowerCase()) {
        error = "Password needs an uppercase letter.";
    } else if (password === password.toUpperCase()) {
        error = "Password needs a lowercase letter.";
    } else if (password !== confirm) {
        error = "Passwords do not match.";
    } else if (password === current) {
        error = "New password must differ from current password.";
    }

    if (error !== "") {
        showMessage("passwordmessage", error, "red");
        return false;
    }

    //Check special character
    let specialCharacters = "!@#$%^&*";
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        if (specialCharacters.indexOf(password[i]) !== -1) {
            hasSpecial = true;
            break;
        }
    }

    if (hasSpecial === false) {
        showMessage(
            "passwordmessage",
            "Password needs a special character (!@#$%^&*).",
            "red"
        );
        return false;
    }

    showMessage(
        "passwordmessage",
        "Validation passed.",
        "green"
    );

    return false;
}

updateHeading();