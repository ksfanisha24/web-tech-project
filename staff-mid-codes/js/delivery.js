let deliveryCount = 2;

// Create new delivery assignment
function createDelivery() {
    let orderId = document.getElementById("orderId").value.trim();
    let address = document.getElementById("address").value.trim();
    let courier = document.getElementById("courier").value.trim();
    let tableBody = document.getElementById("deliveryTableBody");
    let msg = document.getElementById("message");

    deliveryCount++;
    let delId = "DEL-00" + deliveryCount;

    let row = tableBody.insertRow();
    row.insertCell(0).innerHTML = delId;
    row.insertCell(1).innerHTML = orderId;
    row.insertCell(2).innerHTML = address;
    row.insertCell(3).innerHTML = courier;

    let badgeId = "badgeDel" + deliveryCount;
    let selId = "selDel" + deliveryCount;

    row.insertCell(4).innerHTML = '<span id="' + badgeId + '" class="pending">Assigned</span>';

    let actionCell = row.insertCell(5);
    actionCell.innerHTML = '<select id="' + selId + '">' +
        '<option value="Assigned">Assigned</option>' +
        '<option value="In Transit">In Transit</option>' +
        '<option value="Delivered">Delivered</option>' +
        '</select> ' +
        '<button type="button" onclick="updateDeliveryStatus(this, \'' + selId + '\', \'' + badgeId + '\')">Save</button>';

    msg.innerHTML = "Shipment " + delId + " assigned successfully.";

    document.getElementById("orderId").value = "";
    document.getElementById("address").value = "";
    document.getElementById("courier").value = "";

    return false;
}

// Update status of a shipment
function updateDeliveryStatus(btn, selId, badgeId) {
    let sel = document.getElementById(selId);
    let badge = document.getElementById(badgeId);
    let msg = document.getElementById("message");
    let val = sel.value;

    badge.innerHTML = val;
    if (val === "Assigned") {
        badge.className = "pending";
    } else if (val === "In Transit") {
        badge.className = "processing";
    } else {
        badge.className = "delivered";
    }

    msg.innerHTML = "Shipment status updated to " + val + ".";
}
