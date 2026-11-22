function addToCart(name, price, sizeId, image) {
    let size = document.getElementById(sizeId).value;

    //Check size selection
    if (size === "") {
        alert("Please select a size.");
        return;
    }

    //Read the saved cart
    let savedCart = localStorage.getItem("cart");
    let cart = [];

    if (savedCart !== null) {
        cart = JSON.parse(savedCart);
    }

    //Increase quantity if the same product and size already exist
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name && cart[i].size === size) {
            cart[i].quantity = cart[i].quantity + 1;

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Product added to cart.");
            window.location.href = "CustomerCart.html";
            return;
        }
    }

    //Add a new product
    let product = {
        name: name,
        price: price,
        size: size,
        image: image,
        quantity: 1
    };

    cart.push(product);

    //Save the updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart.");
    window.location.href = "CustomerCart.html";
}