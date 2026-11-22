// Add a new order note to the table
function addOrderNote() {
    let orderId = document.getElementById("orderId").value.trim();
    let noteText = document.getElementById("noteText").value.trim();
    let tableBody = document.getElementById("notesTableBody");
    let msg = document.getElementById("message");

    let row = tableBody.insertRow();
    row.insertCell(0).innerHTML = orderId;
    row.insertCell(1).innerHTML = noteText;

    let actionCell = row.insertCell(2);
    actionCell.innerHTML = '<button type="button" class="deletebutton" onclick="deleteNote(this)">Delete</button>';

    msg.innerHTML = "Note added successfully for " + orderId + ".";

    document.getElementById("orderId").value = "";
    document.getElementById("noteText").value = "";

    return false;
}

// Delete note row
function deleteNote(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    let msg = document.getElementById("message");
    msg.innerHTML = "Note removed successfully.";
}
