//Read the saved cart
let savedCart = localStorage.getItem("cart");
let cart = [];

if (savedCart !== null) {
    cart = JSON.parse(savedCart);
}

let subtotal = 0;
let delivery = 0;

//Display validation message
function showMessage(text, color) {
    let message = document.getElementById("message");

    message.textContent = text;
    message.style.color = color;
}

//Display order summary
function displayOrder() {
    let orderItems = document.getElementById("orderitems");

    orderItems.innerHTML = "";
    subtotal = 0;
    delivery = 0;

    if (cart.length === 0) {
        orderItems.textContent = "Your cart is empty.";
    }

    for (let i = 0; i < cart.length; i++) {
        let amount = cart[i].price * cart[i].quantity;

        subtotal = subtotal + amount;

        let item = document.createElement("p");

        item.textContent = cart[i].name +
            " (Size: " + cart[i].size + ") × " +
            cart[i].quantity + ": ৳" + amount;

        orderItems.appendChild(item);
    }

    if (cart.length > 0) {
        delivery = 100;
    }

    document.getElementById("subtotal").textContent = "৳" + subtotal;
    document.getElementById("delivery").textContent = "৳" + delivery;
    document.getElementById("total").textContent = "৳" + (subtotal + delivery);
}

//Validate details and save order
function placeOrder() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let payment = document.getElementById("payment").value;

    if (cart.length === 0) {
        showMessage("Please add products before checkout.", "red");
        return false;
    }

    if (name === "" || phone === "" || address === "" || payment === "") {
        showMessage("Please fill in all required fields.", "red");
        return false;
    }

    if (name.length < 2) {
        showMessage("Name needs at least 2 characters.", "red");
        return false;
    }

    if (phone.length !== 11 || phone.slice(0, 2) !== "01") {
        showMessage("Phone must have 11 digits and start with 01.", "red");
        return false;
    }

    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < "0" || phone[i] > "9") {
            showMessage("Phone number must contain digits only.", "red");
            return false;
        }
    }

    //Save the order before clearing the cart
    let order = {
        name: name,
        phone: phone,
        address: address,
        payment: payment,
        products: cart,
        subtotal: subtotal,
        delivery: delivery,
        total: subtotal + delivery
    };

    localStorage.setItem("order", JSON.stringify(order));

    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "CustomerHome.html";

    return false;
}

//Display summary when the page opens
displayOrder();