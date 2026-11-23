function updateOrderStatus(selectId, badgeId, orderId) {
    let status = document.getElementById(selectId).value;
    let badge = document.getElementById(badgeId);

    badge.innerHTML = status;
    badge.className = status.toLowerCase();

    document.getElementById("message").innerHTML = "Status for " + orderId + " changed to " + status + " successfully.";
}