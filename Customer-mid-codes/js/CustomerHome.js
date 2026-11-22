//Search featured products
function searchProducts() {
    let search = document.getElementById("search").value.trim().toLowerCase();
    let products = document.querySelectorAll(".product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].querySelector("h3").textContent.toLowerCase();

        if (name.indexOf(search) !== -1) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}