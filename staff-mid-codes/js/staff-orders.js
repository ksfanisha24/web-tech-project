// Update order status in table and show message
function updateOrderStatus(selectId, badgeId, orderId) {
    let sel = document.getElementById(selectId);
    let badge = document.getElementById(badgeId);
    let msg = document.getElementById("message");
    let status = sel.value;

    badge.innerHTML = status;
    badge.className = status.toLowerCase();

    msg.innerHTML = "Status for " + orderId + " changed to " + status + " successfully.";
}
