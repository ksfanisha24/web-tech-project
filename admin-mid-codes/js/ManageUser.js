let editingId = ""; 
let userIds = [];    

let startUsers = [
    { id: "101", name: "Raima Simin", email: "raima@gmail.com", role: "Customer", status: "Active" },
    { id: "102", name: "Urboshi", email: "urbo@gmail.com", role: "Manager", status: "Active" },
    { id: "103", name: "Fahim Kazi", email: "fahim@gmail.com", role: "Staff", status: "Inactive" },
    { id: "104", name: "Maliha Tahsin", email: "Maliha@gmail.com", role: "Customer", status: "Active" },
    { id: "105", name: "Jabonnasa", email: "nasa@gmail.com", role: "Staff", status: "Active" }
];

function showMessage(text, color) {
    let message = document.getElementById("formMessage");
    message.innerHTML = text;
    message.style.color = color;
}

function showRow(row, id, name, email, role, status) {
    let statusClass;
    let toggleText;
    let toggleClass;

    if (status === "Active") {
        statusClass = "active";
        toggleText = "Deactivate";
        toggleClass = "deactivate";
        row.style.color = "black";
    } else {
        statusClass = "inactive";
        toggleText = "Activate";
        toggleClass = "activate";
        row.style.color = "gray";
    }

    row.innerHTML = `
        <td>${id}</td>
        <td id="name${id}">${name}</td>
        <td id="email${id}">${email}</td>
        <td id="userRole${id}">${role}</td>
        <td><span id="status${id}" class="${statusClass}">${status}</span></td>
        <td>
            <a href="#" class="edit" onclick="return editUser('${id}')">Edit</a>
            <a href="#" class="${toggleClass}" onclick="return changeStatus('${id}')">${toggleText}</a>
            <a href="#" class="delete" onclick="return deleteUser('${id}')">Delete</a>
        </td>
    `;
}

function addRow(id, name, email, role, status) {
    let row = document.createElement("tr");
    row.id = "row" + id;
    showRow(row, id, name, email, role, status);
    document.getElementById("userBody").appendChild(row);
    userIds.push(id);
    updateCounts();
}

function showForm() {
    document.getElementById("userForm").style.display = "block";
    return false;
}

function clearForm() {
    document.getElementById("newId").value = "";
    document.getElementById("newName").value = "";
    document.getElementById("newEmail").value = "";
    document.getElementById("newRole").value = "Customer";
    document.getElementById("newStatus").value = "Active";
    document.getElementById("newId").disabled = false;
    document.getElementById("addBtn").innerHTML = "Add User";
    editingId = "";
}

function saveUser() {
    let id = document.getElementById("newId").value.trim();
    let name = document.getElementById("newName").value.trim();
    let email = document.getElementById("newEmail").value.trim();
    let role = document.getElementById("newRole").value;
    let status = document.getElementById("newStatus").value;

    if (id === "" || name === "" || email === "") {
        showMessage("ID, name and email are required.", "red");
        return;
    }

    if (isNaN(id)) {
        showMessage("User ID must be a number.", "red");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("Email must contain @ and .", "red");
        return;
    }

    if (editingId === "") {
        if (document.getElementById("row" + id) !== null) {
            showMessage("This User ID already exists.", "red");
            return;
        }

        addRow(id, name, email, role, status);
        showMessage("User added successfully.", "green");
    } else {
        let row = document.getElementById("row" + editingId);
        showRow(row, editingId, name, email, role, status);
        updateCounts();
        showMessage("User updated successfully.", "green");
    }

    clearForm();
}

function editUser(id) {
    showForm();
    document.getElementById("newId").value = id;
    document.getElementById("newName").value = document.getElementById("name" + id).innerHTML;
    document.getElementById("newEmail").value = document.getElementById("email" + id).innerHTML;
    document.getElementById("newRole").value = document.getElementById("userRole" + id).innerHTML;
    document.getElementById("newStatus").value = document.getElementById("status" + id).innerHTML;

    document.getElementById("newId").disabled = true;
    document.getElementById("addBtn").innerHTML = "Update User";
    editingId = id;

    showMessage("Editing user " + id + ". Change the details and click Update User.", "green");
    return false;
}

function changeStatus(id) {
    let row = document.getElementById("row" + id);
    let name = document.getElementById("name" + id).innerHTML;
    let email = document.getElementById("email" + id).innerHTML;
    let role = document.getElementById("userRole" + id).innerHTML;
    let status = document.getElementById("status" + id).innerHTML;

    if (status === "Active") {
        status = "Inactive";
    } else {
        status = "Active";
    }

    showRow(row, id, name, email, role, status);
    return false;
}

function deleteUser(id) {
    document.getElementById("row" + id).remove();

    let remaining = [];
    for (const userId of userIds) {
        if (userId !== id) {
            remaining.push(userId);
        }
    }
    userIds = remaining;
    updateCounts();

    if (editingId === id) {
        clearForm();
    }

    showMessage("User deleted.", "green");
    return false;
}

function filterUsers() {
    let role = document.getElementById("role").value;

    for (const id of userIds) {
        let userRole = document.getElementById("userRole" + id).innerHTML.toLowerCase();
        let row = document.getElementById("row" + id);

        if (role === "all" || userRole === role) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    }

    return false;
}

function updateCounts() {
    let customers = 0;
    let managers = 0;
    let staff = 0;

    for (const id of userIds) {
        let role = document.getElementById("userRole" + id).innerHTML;

        if (role === "Customer") {
            customers++;
        } else if (role === "Manager") {
            managers++;
        } else if (role === "Staff") {
            staff++;
        }
    }

    document.getElementById("customerCount").innerHTML = customers;
    document.getElementById("managerCount").innerHTML = managers;
    document.getElementById("staffCount").innerHTML = staff;
}

for (const user of startUsers) {
    addRow(user.id, user.name, user.email, user.role, user.status);
}