let editingId = "";
let productIds = [];

let startProducts = [
    { id: "1001", name: "Oversized T-Shirt", category: "T-Shirts", size: "M", price: "650", stock: "45" },
    { id: "1002", name: "Classic Hoodie", category: "Hoodies", size: "L", price: "1250", stock: "25" },
    { id: "1003", name: "Wide-Leg Jeans", category: "Jeans", size: "XL", price: "1500", stock: "8" },
    { id: "1004", name: "Floral Summer Dress", category: "Dresses", size: "S", price: "1100", stock: "32" },
    { id: "1005", name: "Cargo Pants", category: "Pants", size: "M", price: "1350", stock: "0" }
];

function showMessage(text, color) {
    let message = document.getElementById("formMessage");
    message.innerHTML = text;
    message.style.color = color;
}

function showRow(row, id, name, category, size, price, stock) {
    let status;
    let statusClass;

    if (Number(stock) === 0) {
        status = "Out of Stock";
        statusClass = "inactive";
    } else if (Number(stock) <= 10) {
        status = "Low Stock";
        statusClass = "lowstock1";
    } else {
        status = "In Stock";
        statusClass = "active";
    }

    row.innerHTML = `
        <td>${id}</td>
        <td id="name${id}">${name}</td>
        <td id="category${id}">${category}</td>
        <td id="size${id}">${size}</td>
        <td id="price${id}">\u09F3${price}</td>
        <td id="stock${id}">${stock}</td>
        <td><span id="status${id}" class="${statusClass}">${status}</span></td>
        <td>
            <a href="#" class="edit" onclick="return editProduct('${id}')">Edit</a>
            <a href="#" class="delete" onclick="return deleteProduct('${id}')">Delete</a>
        </td>
    `;
}

function addRow(id, name, category, size, price, stock) {
    let row = document.createElement("tr");
    row.id = "row" + id;
    showRow(row, id, name, category, size, price, stock);
    document.getElementById("productBody").appendChild(row);
    productIds.push(id);
    updateCounts();
}

function showForm() {
    document.getElementById("productForm").style.display = "block";
    return false;
}

function clearForm() {
    document.getElementById("newId").value = "";
    document.getElementById("newName").value = "";
    document.getElementById("newCategory").value = "T-Shirts";
    document.getElementById("newSize").value = "S";
    document.getElementById("newPrice").value = "";
    document.getElementById("newStock").value = "";
    document.getElementById("newId").disabled = false;
    document.getElementById("addBtn").innerHTML = "Add Product";
    editingId = "";
}

function saveProduct() {
    let id = document.getElementById("newId").value.trim();
    let name = document.getElementById("newName").value.trim();
    let category = document.getElementById("newCategory").value;
    let size = document.getElementById("newSize").value;
    let price = document.getElementById("newPrice").value.trim();
    let stock = document.getElementById("newStock").value.trim();

    if (id === "" || name === "" || price === "" || stock === "") {
        showMessage("ID, name, price and stock are required.", "red");
        return;
    }

    if (isNaN(id)) {
        showMessage("Product ID must be a number.", "red");
        return;
    }

    if (isNaN(price) || Number(price) <= 0) {
        showMessage("Price must be a number greater than 0.", "red");
        return;
    }

    if (isNaN(stock) || Number(stock) < 0 || stock.includes(".")) {
        showMessage("Stock must be a whole number (0 or more).", "red");
        return;
    }

    if (editingId === "") {
        if (document.getElementById("row" + id) !== null) {
            showMessage("This Product ID already exists.", "red");
            return;
        }

        addRow(id, name, category, size, price, stock);
        showMessage("Product added successfully.", "green");
    } else {
        let row = document.getElementById("row" + editingId);
        showRow(row, editingId, name, category, size, price, stock);
        updateCounts();
        showMessage("Product updated successfully.", "green");
    }

    clearForm();
}

function editProduct(id) {
    showForm();
    document.getElementById("newId").value = id;
    document.getElementById("newName").value = document.getElementById("name" + id).innerHTML;
    document.getElementById("newCategory").value = document.getElementById("category" + id).innerHTML;
    document.getElementById("newSize").value = document.getElementById("size" + id).innerHTML;
    document.getElementById("newPrice").value = document.getElementById("price" + id).innerHTML.slice(1);
    document.getElementById("newStock").value = document.getElementById("stock" + id).innerHTML;

    document.getElementById("newId").disabled = true;
    document.getElementById("addBtn").innerHTML = "Update Product";
    editingId = id;

    showMessage("Editing product " + id + ". Change the details and click Update Product.", "green");
    return false;
}

function deleteProduct(id) {
    document.getElementById("row" + id).remove();

    let remaining = [];
    for (const productId of productIds) {
        if (productId !== id) {
            remaining.push(productId);
        }
    }
    productIds = remaining;
    updateCounts();

    if (editingId === id) {
        clearForm();
    }

    showMessage("Product deleted.", "green");
    return false;
}

function filterProducts() {
    let category = document.getElementById("category").value;
    let categoryName;

    if (category === "tshirts") {
        categoryName = "T-Shirts";
    } else if (category === "hoodies") {
        categoryName = "Hoodies";
    } else if (category === "jeans") {
        categoryName = "Jeans";
    } else if (category === "dresses") {
        categoryName = "Dresses";
    } else if (category === "pants") {
        categoryName = "Pants";
    }

    for (const id of productIds) {
        let productCategory = document.getElementById("category" + id).innerHTML;
        let row = document.getElementById("row" + id);

        if (category === "all" || productCategory === categoryName) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    }

    return false;
}

function updateCounts() {
    let inStock = 0;
    let lowStock = 0;

    for (const id of productIds) {
        let status = document.getElementById("status" + id).innerHTML;

        if (status === "In Stock") {
            inStock++;
        } else if (status === "Low Stock") {
            lowStock++;
        }
    }

    document.getElementById("totalCount").innerHTML = productIds.length;
    document.getElementById("inStockCount").innerHTML = inStock;
    document.getElementById("lowStockCount").innerHTML = lowStock;
}

for (const product of startProducts) {
    addRow(product.id, product.name, product.category, product.size, product.price, product.stock);
}