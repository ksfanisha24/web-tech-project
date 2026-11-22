function updateStock(button) {
    let row = button.parentElement.parentElement;
    let quantity = prompt("Enter new stock quantity:");

    if (quantity === null || quantity.trim() === "") {
        return;
    }

    quantity = Number(quantity);

    if (!Number.isInteger(quantity) || quantity < 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    row.cells[4].innerHTML = quantity;

    let status = row.cells[5].querySelector("span");

    if (quantity > 10) {
        status.innerHTML = "In Stock";
        status.className = "instock";
    }
    else if (quantity > 0) {
        status.innerHTML = "Low Stock";
        status.className = "lowstock";
    }
    else {
        status.innerHTML = "Out of Stock";
        status.className = "outstock";
    }

    alert("Stock updated successfully!");
}

function filterInventory(event) {

    event.preventDefault();

    let selectedStock = document.getElementById("stock").value;
    let rows = document.querySelectorAll(".table-section table tr");

    for (let i = 1; i < rows.length; i++) {

        let status = rows[i].cells[5].innerText;

        if (selectedStock === "all" ||
            (selectedStock === "available" && status === "In Stock") ||
            (selectedStock === "low" && status === "Low Stock") ||
            (selectedStock === "out" && status === "Out of Stock")) {

            rows[i].style.display = "";
        }
        else {
            rows[i].style.display = "none";
        }
    }
}


document.getElementById("inventoryFilterForm").addEventListener("submit", filterInventory);
