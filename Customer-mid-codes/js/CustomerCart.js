//Read the saved cart
let savedCart = localStorage.getItem("cart");
let cart = [];

if (savedCart !== null) {
    cart = JSON.parse(savedCart);
}

//Display products and calculate totals
function displayCart() {
    let cartItems = document.getElementById("cartitems");
    let subtotal = 0;
    let delivery = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<tr><td colspan="5">Your cart is empty.</td></tr>';
    }

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        let amount = product.price * product.quantity;

        subtotal = subtotal + amount;

        cartItems.innerHTML +=
            '<tr>' +
                '<td>' +
                    '<img src="' + product.image +
                    '" alt="' + product.name + '">' +
                    '<p><b>' + product.name + '</b></p>' +
                    '<p>Size: ' + product.size + '</p>' +
                '</td>' +

                '<td>৳' + product.price + '</td>' +

                '<td>' +
                    '<label for="quantity' + i + '">Quantity</label>' +
                    '<input type="number" id="quantity' + i + '"' +
                    ' value="' + product.quantity + '" min="1" step="1"' +
                    ' onchange="updateQuantity(' + i + ')">' +
                '</td>' +

                '<td>৳' + amount + '</td>' +

                '<td>' +
                    '<button type="button" class="removebutton"' +
                    ' onclick="removeProduct(' + i + ')">' +
                        'Remove' +
                    '</button>' +
                '</td>' +
            '</tr>';
    }

    if (cart.length > 0) {
        delivery = 100;
    }

    document.getElementById("subtotal").textContent = "৳" + subtotal;
    document.getElementById("delivery").textContent = "৳" + delivery;
    document.getElementById("total").textContent = "৳" + (subtotal + delivery);
}

//Update product quantity
function updateQuantity(index) {
    let quantity = Number(
        document.getElementById("quantity" + index).value
    );

    if (quantity < 1 || Number.isInteger(quantity) === false) {
        alert("Please enter a whole number of at least 1.");
        displayCart();
        return;
    }

    cart[index].quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

//Remove a product
function removeProduct(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

//Check cart before checkout
function checkCart() {
    if (cart.length === 0) {
        alert("Please add products before checkout.");
        return false;
    }

    return true;
}

//Display cart when the page opens
displayCart();