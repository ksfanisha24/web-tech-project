//original product order
let menProducts = document.querySelectorAll("#menproducts .product");
let womenProducts = document.querySelectorAll("#womenproducts .product");

//Filter products by category
function filterProducts() {
    let category = document.getElementById("category").value;

    let menHeading = document.getElementById("men");
    let womenHeading = document.getElementById("women");

    let menRow = document.getElementById("menproducts");
    let womenRow = document.getElementById("womenproducts");

    if (category === "men") {
        menHeading.style.display = "block";
        menRow.style.display = "flex";

        womenHeading.style.display = "none";
        womenRow.style.display = "none";
    } else if (category === "women") {
        womenHeading.style.display = "block";
        womenRow.style.display = "flex";

        menHeading.style.display = "none";
        menRow.style.display = "none";
    } else {
        menHeading.style.display = "block";
        menRow.style.display = "flex";

        womenHeading.style.display = "block";
        womenRow.style.display = "flex";
    }
}

//Sort both categories
function sortProducts() {
    let order = document.getElementById("sort").value;

    sortCategory("menproducts", menProducts, order);
    sortCategory("womenproducts", womenProducts, order);
}

//Sort products inside one category
function sortCategory(rowId, products, order) {
    let row = document.getElementById(rowId);
    let items = [];

    // Copy products in their original order
    for (let i = 0; i < products.length; i++) {
        items[i] = products[i];
    }

    //Compare prices and swap products
    for (let i = 0; i < items.length - 1; i++) {
        for (let j = i + 1; j < items.length; j++) {
            let firstPrice = Number(items[i].getAttribute("data-price"));
            let secondPrice = Number(items[j].getAttribute("data-price"));

            if ((order === "low" && firstPrice > secondPrice) ||
                (order === "high" && firstPrice < secondPrice)) {

                let temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
        }
    }

    //Display products in the selected order
    for (let i = 0; i < items.length; i++) {
        row.appendChild(items[i]);
    }
}